import * as EV from 'template/constants/events';
import eventBus from 'core/eventBus';

import SectionFactory from './factory/SectionFactory';
import RowFactory from './factory/RowFactory';
import ControlFactory from './factory/ControlFactory';

const factories = {
    section: null,
    row: null,
    control: null,
}


// TODO: move repositories to new folder / file 
const repositories = {
    section: null,
    row: null,
    control: null,
}

const instance = {
 
};

const _dataStructure = {
    children: [],
}; 


/// init  
function initFactory() {
    factories.section = new SectionFactory;
    factories.row = new RowFactory;
    factories.control = new ControlFactory;
    // 
    repositories.section = new Map();
}

function initEvent() {

    // TODO: split handler to service 
    eventBus.addListener(EV.SECTION_ADD_REQUEST, function(payload = { title }) {

        // create main entity
        var sectionData = factories.section.create(payload); 
        
        // auto add 1 row after add 1 section 
        var rowData = factories.row.create();
        sectionData.children.push(rowData);

        // add to _dataStructure  
        _dataStructure.children.push(sectionData);

        // add to section repo 
        repositories.section.set(sectionData.id, sectionData);

        // fire event
        eventBus.fireEvent(EV.SECTION_ADDED, { sectionId: sectionData.id });
    });
    

    eventBus.addListener(EV.ROW_ADD_REQUEST, function({ sectionId }) {
        console.log(' row adding ...', sectionId)

        /// look up section data 
        if (!repositories.section.has(sectionId)) {
            // throw error
            return false;
        }
        var secData = repositories.section.get(sectionId);

        // add new row data to section 
        var rowData = factories.row.create();
        secData.children.push(rowData);

        // fire event
        eventBus.fireEvent(EV.ROW_ADDED, { rowId: rowData.id });
    });

    eventBus.addListener(EV.ROW_REORDER_REQUEST, function({ sectionId, newIndex, oldIndex } = { sectionId, newIndex, oldIndex }) {
        /// look up section data 
        if (!repositories.section.has(sectionId)) {
            // throw error
            return false;
        }

        var secData = repositories.section.get(sectionId);

        // swap 
        var temp = secData.children[newIndex];
        secData.children[newIndex] = secData.children[oldIndex];
        secData.children[oldIndex] = temp;

        // fire event done 
    });
}


instance.init = function() {
    initFactory();
    initEvent();
}

instance.getState = function() {
    return _dataStructure;
} 

export default instance;