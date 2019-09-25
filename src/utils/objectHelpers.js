import extendDeep from 'deep-extend';
import cloneDeep from 'lodash/cloneDeep';
import pick from 'lodash/pick'; // object 
import omit from 'lodash/omit'; // object 
import extend from 'lodash/extend'; 
import forEach from 'lodash/forEach'; 
import isEmpty from 'lodash/isEmpty'; 

/*
 * Remove observerable, or proxies, ... 
 */
export const plainObject =  function (obj) {
    return JSON.parse(JSON.stringify(obj));
}

export { cloneDeep,  extendDeep, pick, omit, extend, forEach, isEmpty };