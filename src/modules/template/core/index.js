import {
    controlAttrRegistry, controlStructureRegistry,
    controlOptionsComponentRegistry, controlStructureComponentRegistry
} from './registry/index';

import { PageStructure, TemplateStorage } from '$structure/index';

import eventHandler from './handlers/EventHandler';
import controlRegisterHandler from './handlers/ControlRegisterHandler';

import { cloneDeep }  from 'utils/objectHelpers';

const pageStructure = new PageStructure;

/// import structure 
const instance = {};

instance.init = function() {
    eventHandler.init(pageStructure);
    controlRegisterHandler.init();
}

instance.registerControl = function( ...params) {
    /// will use this later
}

/**
 * Methods to expose state for component
 */
instance.getPageState = function() {
    return pageStructure.getPageState();
}

instance.getSectionState = function(sectionId) {
    return pageStructure.getSectionState(sectionId);
}

instance.getRowState = function(rowId) {
    return pageStructure.getRowState(rowId);
}

instance.getControlState = function(controlId) {
    return pageStructure.getControlState(controlId);
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

instance.getControlStructureComponent = function(sub_type) {
    return controlStructureComponentRegistry.get(sub_type);
}

/**
 * Methods to expose API manipulate with template data
 */
instance.saveTemplate = function() {
    return TemplateStorage.saveToLocalStorage(pageStructure);
}

instance.loadTemplate = function(templateData) {
    return pageStructure.loadState(templateData);
}

instance.loadLastestTemplate = function() {
    const stateStr = TemplateStorage.getLastestItem();
    if (stateStr == null) {
        return; 
    }

    return instance.loadTemplate(stateStr);
}

export default instance;