import extendDeep from 'deep-extend';
import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick'; // object 
import omit from 'lodash/omit'; // object 

/*
 * Remove observerable, or proxies, ... 
 */
export const plainObject =  function (obj) {
    return JSON.parse(JSON.stringify(obj));
}

export { cloneDeep,  extendDeep, pick, omit };