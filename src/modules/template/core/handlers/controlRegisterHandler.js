// This handler to register all built-in Control 
import { TEXT_CONTROL_ATTR, NUMBER_CONTROL_ATTR } from '$template/constants/control_attrs';
import controlAttrRegistry from '../registry/controlAttrRegistry';
import controlStructureRegistry from '../registry/controlStructureRegistry';

const instance = {};


instance.registerControl = function( sub_type,  { structure, sidebar, attrs }) {
    if (!attrs || !structure) {
        console.warn(`[EForm Warning]: Register control failed! Options invalid!`)
        return false; 
    }

    controlAttrRegistry.register(sub_type, attrs);
    controlStructureRegistry.register(sub_type, structure);

    if (sidebar) {
        // sidebar ... 
    }
}


instance.init = function() {
        
    instance.registerControl( 'text', {
        structure: {
            label: 'Text Control',
            icon: 'el-icon-edit', 
        },
        attrs: TEXT_CONTROL_ATTR,
        // sidebar: '',
    })

    instance.registerControl( 'number', {
        structure: {
            label: 'Number Control',
            icon: 'el-icon-lollipop',
        },
        attrs: NUMBER_CONTROL_ATTR,
        // sidebar: '',
    })

}

export default instance; 