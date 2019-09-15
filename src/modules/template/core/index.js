import controlAttrRegistry from './registry/controlAttrRegistry';
import controlStructureRegistry from './registry/controlStructureRegistry';

import { PageStructure } from '$structure/index';

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

export default instance;