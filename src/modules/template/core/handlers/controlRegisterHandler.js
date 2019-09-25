/// registry 
import {
    controlAttrRegistry, controlStructureRegistry,
    controlOptionsComponentRegistry, controlStructureComponentRegistry
} from '../registry/index';



const instance = {};

instance.registerControl = function( sub_type,  { structure, attrs, optionComponent, structureComponent }) {
    if (!attrs || !structure) {
        console.warn(`[EForm Warning]: Register control "${sub_type}" failed! Options invalid!`)
        return false; 
    }

    controlAttrRegistry.register(sub_type, attrs);
    controlStructureRegistry.register(sub_type, structure);

    if (optionComponent) {
        controlOptionsComponentRegistry.register(sub_type, optionComponent);
    }

    if (structureComponent) {
        controlStructureComponentRegistry.register(sub_type, structureComponent)
    }
}

/*
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
        structureComponent: TextStructure,
    })

    // instance.registerControl( 'number', {
    //     structure: {
    //         label: 'Number Control',
    //         icon: 'el-icon-lollipop',
    //     },
    //     attrs: NUMBER_CONTROL_ATTR,
    //     optionComponent: NumberOptions,
    //     structureComponent: NumberStructure,
    //     // sidebar: '',
    // })

}

export default instance; 