import { observable } from  'core/observable';

export default function createValueStore( controlRepo, defaultValue = {} ) {
    const targetObj = {};
    defaultValue = defaultValue || {};

    controlRepo.map.forEach(( { name }  = controlData ) => {

        if (targetObj[name]) {
            console.warn('[EFORM WARN]: Duplicate name of control detected!');
        }

        const defaultVal = defaultValue[name] || '';
        targetObj[name] = defaultVal;
    });

    const result =  observable( targetObj );
    // console.log('>> result of store', result); 

    return result;
}