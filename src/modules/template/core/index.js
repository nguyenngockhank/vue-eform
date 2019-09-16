import controlAttrRegistry from './registry/controlAttrRegistry';
import controlStructureRegistry from './registry/controlStructureRegistry';

import { PageStructure, TemplateStorage } from '$structure/index';

import eventHandler from './handlers/eventHandler';
import controlRegisterHandler from './handlers/controlRegisterHandler';

import cloneDeep from 'lodash/cloneDeep';

/// import structure 
const instance = {};

instance.init = function() {
    eventHandler.init();
    controlRegisterHandler.init();
}

instance.getPageState = function() {
    return PageStructure.getPageState();
}

instance.getSectionState = function(sectionId) {
    return PageStructure.getSectionState(sectionId);
}

instance.getRowState = function(rowId) {
    return PageStructure.getRowState(rowId);
}

instance.getControlState = function(controlId) {
    return PageStructure.getControlState(controlId);
}

instance.registerControl = function( ...params) {
    /// will use this later
}

///  helper to GUI 
instance.getControlAttr = function (sub_type) {
    // avoid to conflict 
    return cloneDeep(controlAttrRegistry.get(sub_type));
}

instance.datasourceControlList = function() {
    return controlStructureRegistry.menuItemControlList();
}


/// save template & update template & delete ... 
instance.saveTemplate = function() {
    return TemplateStorage.saveToLocalStorage();
}

instance.loadLastestTemplate = function() {
    const stateStr = TemplateStorage.getLastestItem();
    if (stateStr == null) {
        return; 
    }

    return PageStructure.loadState(stateStr);
}

export default instance;