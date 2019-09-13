import * as EV from 'template/constants/events';
import eventBus from 'core/eventBus';

import sectionRepository from './repository/SectionRepository';
// import rowRepository from './repository/RowRepository';


const instance = { };

const _dataStructure = {
    children: [],
}; 


function initEvent() {

    // TODO: split handler to service 
    eventBus.addListener(EV.SECTION_ADD_REQUEST, function(payload = { title }) {
        let sectionData = sectionRepository.add(payload);
  
        // add to _dataStructure  
        _dataStructure.children.push(sectionData);

        // fire event to add a new row 
        eventBus.fireEvent(EV.ROW_ADD_REQUEST, { sectionId: sectionData.id });

        // fire event
        eventBus.fireEvent(EV.SECTION_ADDED, { sectionId: sectionData.id });
    });


    eventBus.addListener(EV.SECTION_REMOVE_REQUEST, function({ sectionId }) {
        sectionRepository.remove(sectionId);
        _dataStructure.children = _dataStructure.children.filter((e) => e.id != sectionId)
    });

    
    
    eventBus.addListener(EV.ROW_ADD_REQUEST, function({ sectionId }) {

        const rowData = sectionRepository.addRow( sectionId )
        // rowRepository.add({ sectionId: sectionData.id })

        // fire event
        eventBus.fireEvent(EV.ROW_ADDED, { rowId: rowData.id });
    });


}


instance.init = function() {
    initEvent();
}

instance.buildStructure = function() {

}

instance.getState = function() {
    return _dataStructure;
} 

instance.getSectionState = function(sectionId) {
    return sectionRepository.find(sectionId);
}

export default instance;