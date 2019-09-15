import controlAttrRegistry from './registry/ControlAttrRegistry';
import controlStructureRegistry from './registry/ControlStructureRegistry';

import { PageStructure } from '$structure/index';

import eventHandler from './handlers/eventHandler';

import cloneDeep from 'lodash/cloneDeep';

/// import structure 
const instance = {};

instance.init = function() {
    eventHandler.init();
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

instance.registerControl = function( sub_type,  { structure, sidebar, attrs }) {
    if (attrs) {
        controlAttrRegistry.register(sub_type, attrs);
    }

    if (structure) {
        controlStructureRegistry.register(sub_type, structure);
    }

    if (sidebar) {
        // sidebar ... 
    }
}

instance.getControlAttr = function (sub_type) {
    // avoid to conflict 
    return cloneDeep(controlAttrRegistry.get(sub_type));
}

export default instance;