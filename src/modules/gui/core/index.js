import controlComponentRegistry from './registry/ControlComponentRegistry';


/*
 * Use for register Control Component
 * 
 * @params:  sub_type, component
 */
export function registerControl(...params) {
    return controlComponentRegistry.register(...params);
}

/*
 * get Control Component
 * 
 * @return null / Component of Vue
 */
export function controlComponent(sub_type) {
    return controlComponentRegistry.get(sub_type);
}