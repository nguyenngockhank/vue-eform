import controlAttrRegistry from './registry/controlAttrRegistry';
import controlStructureRegistry from './registry/controlStructureRegistry';
import controlOptionsComponentRegistry from './registry/ControlOptionsComponentRegistry';

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

instance.registerControl = function( ...params) {
    /// will use this later
}

/**
 * Methods to expose state for component
 */
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


/**
 * Methods to expose data for Component 
 */
instance.getControlAttr = function (sub_type) {
    // avoid to conflict 
    return cloneDeep(controlAttrRegistry.get(sub_type));
}

instance.datasourceControlList = function() {
    return controlStructureRegistry.menuItemControlList();
}

instance.getControlOptionsComponent = function(sub_type) {
    return controlOptionsComponentRegistry.get(sub_type);
}

/**
 * Methods to expose API manipulate with template data
 */
instance.saveTemplate = function() {
    return TemplateStorage.saveToLocalStorage();
}

instance.loadTemplate = function(templateData) {
    return PageStructure.loadState(templateData);
}

instance.loadLastestTemplate = function() {
    const stateStr = TemplateStorage.getLastestItem();
    if (stateStr == null) {
        return; 
    }

    return instance.loadTemplate(stateStr);
}

export default instance;