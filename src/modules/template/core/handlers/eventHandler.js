import * as EV from '$template/constants/events';
import eventBus from 'core/eventBus';

const instance = {};

instance.init = function(pageStructure) {

    eventBus.addListener(EV.SECTION_ADD_REQUEST, function(payload = { title }) {
        // add to _dataStructure  
        const sectionData = pageStructure.addSection(payload);
        // fire event
        eventBus.fireEvent(EV.SECTION_ADDED, { sectionId: sectionData.id });
    });


    eventBus.addListener(EV.SECTION_REMOVE_REQUEST, function({ sectionId }) {
        pageStructure.removeSection(sectionId);
        // fire event
        eventBus.fireEvent(EV.SECTION_REMOVED, { sectionId });
    });

    
    eventBus.addListener(EV.ROW_ADD_REQUEST, function({ sectionId }) {
        const rowData = pageStructure.addRow(sectionId);
        // fire event
        eventBus.fireEvent(EV.ROW_ADDED, { rowId: rowData.id });
    });

    eventBus.addListener(EV.ROW_REMOVE_REQUEST, function( { rowId }) {
        pageStructure.removeRow(rowId);
        // fire event
        eventBus.fireEvent(EV.ROW_REMOVED, { rowId });
    });


    eventBus.addListener(EV.CONTROL_ADD_REQUEST, function({ rowId, ...attrs }) {
        const controlData = pageStructure.addControl(rowId, attrs);
        // fire event
        eventBus.fireEvent(EV.CONTROL_ADDED, { controlId: controlData.id });
    });

    eventBus.addListener(EV.CONTROL_REMOVE_REQUEST, function( { controlId }) {
        pageStructure.removeControl(controlId);
        // fire event
        eventBus.fireEvent(EV.CONTROL_REMOVED, { controlId });
    });

    eventBus.addListener(EV.CONTROL_UPDATE_REQUEST, function( { controlId, data }) {
        pageStructure.updateControl(controlId, data);
        // fire event
    });


}


export default instance;