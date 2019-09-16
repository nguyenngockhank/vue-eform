import * as EV from '$template/constants/events';
import eventBus from 'core/eventBus';
import { PageStructure } from '$structure/index';

const instance = {};

instance.init = function() {

    eventBus.addListener(EV.SECTION_ADD_REQUEST, function(payload = { title }) {
        // add to _dataStructure  
        const sectionData = PageStructure.addSection(payload);
        // fire event
        eventBus.fireEvent(EV.SECTION_ADDED, { sectionId: sectionData.id });
    });


    eventBus.addListener(EV.SECTION_REMOVE_REQUEST, function({ sectionId }) {
        PageStructure.removeSection(sectionId);
        // fire event
        eventBus.fireEvent(EV.SECTION_REMOVED, { sectionId });
    });

    
    eventBus.addListener(EV.ROW_ADD_REQUEST, function({ sectionId }) {
        const rowData = PageStructure.addRow(sectionId);
        // fire event
        eventBus.fireEvent(EV.ROW_ADDED, { rowId: rowData.id });
    });

    eventBus.addListener(EV.ROW_REMOVE_REQUEST, function( { rowId }) {
        PageStructure.removeRow(rowId);
        // fire event
        eventBus.fireEvent(EV.ROW_REMOVED, { rowId });
    });


    eventBus.addListener(EV.CONTROL_ADD_REQUEST, function({ rowId, ...attrs }) {
        const controlData = PageStructure.addControl(rowId, attrs);
        // fire event
        eventBus.fireEvent(EV.CONTROL_ADDED, { controlId: controlData.id });
    });

    eventBus.addListener(EV.CONTROL_REMOVE_REQUEST, function( { controlId }) {
        PageStructure.removeControl(controlId);
        // fire event
        eventBus.fireEvent(EV.CONTROL_REMOVED, { controlId });
    });



}


export default instance;