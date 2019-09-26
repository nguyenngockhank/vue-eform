import { Logger } from '$template/utils/index';

/// registry 
import {
    controlAttrRegistry, controlStructureRegistry,
    controlOptionsComponentRegistry, controlStructureComponentRegistry
} from '../registry/index';



const instance = {};

instance.registerControl = function( sub_type,  { structure, attrs, optionComponent, structureComponent }) {
    if (!attrs || !structure) {
        Logger.warn(`Register control "${sub_type}" failed! Options invalid!`)
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

    Logger.i(`Registed Control "${sub_type}" `);
}

export default instance; 