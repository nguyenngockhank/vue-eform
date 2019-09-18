import EntityRegistry from 'core/entityRegistry';

import { BASE_ATTR } from '$template/constants/controlAttrs';

import { extendDeep, cloneDeep, pick, omit } from 'utils/objectHelpers';
import { difference } from 'utils/arrayHelpers';


/// key is a subtype of control
/// value is list of attributes of that subtype control
class ControlAttrRegistry extends EntityRegistry {

    register(key, value) {
        
        // find extra keys
        const defaultKeys = Object.keys(BASE_ATTR);
        const registerKeys = Object.keys(value); 

        const extraKeys = difference(registerKeys, defaultKeys);

        // process extra values 
        var extraValues = [];
        if (extraKeys.length > 0) {
            extraValues = pick( value, extraKeys );
            value = omit(value, extraKeys);
            value.extra = extraValues;
        }

        // extends default attributes before registration
        const defaultAttrs = cloneDeep(BASE_ATTR);
        value = extendDeep( defaultAttrs, value);

        return super.register(key, value);
    }


}

export default new ControlAttrRegistry;