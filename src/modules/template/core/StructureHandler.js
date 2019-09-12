import * as EV from '../constants/events';
import eventBus from 'core/eventBus';
import factory from './factory';

const instance = {};

const _data = {
    children: [],
}; 

const sectionMap = new Map();

instance.init = function() {

    eventBus.addListener(EV.SECTION_ADDING, function(payload = { title }) {
        var secData = factory.createSection(payload);
        _data.children.push(secData);

        sectionMap.set(secData.id, secData);

        eventBus.fireEvent(EV.SECTION_ADDED, { sectionId: secData.id });
    });


    
    eventBus.addListener(EV.ROW_ADDING, function({ sectionId }) {
        console.log(' row adding ...', sectionId)

        if (!sectionMap.has(sectionId)) {
            // throw error
            return false;
        }

        var secData = sectionMap.get(sectionId);
        var rowData = factory.createRow();

        secData.children.push(rowData);

        
     

        console.log(_data)

    });
}

instance.getState = function() {
    return _data;
} 

export default instance;