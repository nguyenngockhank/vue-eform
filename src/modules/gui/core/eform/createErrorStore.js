import { observable } from  'core/observable';

export default function createErrorStore( controlRepo, formValue = {} ) {
    const targetObj = {};

    controlRepo.map.forEach(( { name }  = controlData ) => {
        targetObj[name] = null;
    });
    const result =  observable( targetObj );
    return result;
}