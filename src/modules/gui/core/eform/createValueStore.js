import { observable } from  'core/observable';

/*
 * To create a store for form value
 */
export default function createValueStore( controlRepo, formValue = {} ) {
    const targetObj = {};
    formValue = formValue || {};

    controlRepo.map.forEach(( { name }  = controlData ) => {

        if (targetObj[name]) {
            console.warn('[EFORM WARN]: Duplicate name of control detected!');
        }

        // TODO: get default value from 
        const initVal = formValue[name] || '';
        targetObj[name] = initVal;
    });

    const result =  observable( targetObj );

    return result;
}