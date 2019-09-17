// This handler to register all built-in Control 
import { TEXT_CONTROL_ATTR, NUMBER_CONTROL_ATTR } from '$template/constants/control_attrs';
import TextOptions from '$template/components/control_options/TextOptions';
import NumberOptions from '$template/components/control_options/NumberOptions';



import controlAttrRegistry from '../registry/controlAttrRegistry';
import controlStructureRegistry from '../registry/controlStructureRegistry';
import controlOptionsComponentRegistry from '../registry/ControlOptionsComponentRegistry';

const instance = {};


instance.registerControl = function( sub_type,  { structure, attrs, optionComponent }) {
    if (!attrs || !structure) {
        console.warn(`[EForm Warning]: Register control failed! Options invalid!`)
        return false; 
    }

    controlAttrRegistry.register(sub_type, attrs);
    controlStructureRegistry.register(sub_type, structure);

    if (optionComponent) {
        // sidebar ... 
        controlOptionsComponentRegistry.register(sub_type, optionComponent);
    }
}

/**
 * Methods to register all of built-in controls
 */
instance.init = function() {
        
    instance.registerControl( 'text', {
        structure: {
            label: 'Text Control',
            icon: 'el-icon-edit', 
        },
        attrs: TEXT_CONTROL_ATTR,
        optionComponent: TextOptions,
        // sidebar: '',
    })

    instance.registerControl( 'number', {
        structure: {
            label: 'Number Control',
            icon: 'el-icon-lollipop',
        },
        attrs: NUMBER_CONTROL_ATTR,
        optionComponent: NumberOptions,
        // sidebar: '',
    })

}

export default instance; 