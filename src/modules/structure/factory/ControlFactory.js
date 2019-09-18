import EntityFactory from './EntityFactory';
import { TYPE_CONTROL, PREFIX_CONTROL_ID } from 'constants/entities';

class ControlFactory extends EntityFactory {
    
    constructor() {
        super( PREFIX_CONTROL_ID, TYPE_CONTROL);
    }

    create(options) {
        let newIns = super.create(options);
        newIns.name = newIns.id; 
        return newIns;
    }
}

export default new ControlFactory;