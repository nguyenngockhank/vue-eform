import { INPUT_CONTROL, SELECT_CONTROL} from 'constants';
import { isEmpty } from 'utils/objectHelpers';

function buildControlSchema(subType, validate) {
    const schema = {}; 

    if(validate.required) {
        schema.presence =  { allowEmpty: false };
    }
 
    switch(subType) {
        case INPUT_CONTROL:
            // build later
        case SELECT_CONTROL: 
            // build later
    }

    return schema;
}


export default function buildValidationSchema( controlRepo ) {
    const result = {};
    
    controlRepo.map.forEach(( { name, sub_type, validate }  = controlData ) => {
        const controlSchema =  buildControlSchema(sub_type, validate);

        if (!isEmpty(controlSchema)) {
            result[name] = controlSchema;
        }
    });
  
    return result;
}