import controlComponentRegistry from './registry/ControlComponentRegistry';
import { Logger } from '$gui/utils/index'; 

/*
 * Use for register Control Component
 * 
 * @params:  sub_type, component
 */
export function registerControl(sub_type, component) {
    Logger.i(`Register control "${sub_type}"`)
    return controlComponentRegistry.register(sub_type, component);
}

/*
 * get Control Component
 * 
 * @return null / Component of Vue
 */
export function controlComponent(sub_type) {
    return controlComponentRegistry.get(sub_type);
}