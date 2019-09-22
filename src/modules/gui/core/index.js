import controlComponentRegistry from './registry/ControlComponentRegistry';

const instance = {};

instance.registerControl = function(sub_type, { component }){
    controlComponentRegistry.register(sub_type, component);
} 


export default instance;