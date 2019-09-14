import EntityFactory from './EntityFactory';
import { TYPE_CONTROL, PREFIX_CONTROL_ID } from 'constants/entities';

class ControlFactory extends EntityFactory {
    
    constructor() {
        super(TYPE_CONTROL, PREFIX_CONTROL_ID);
    }

}

export default new ControlFactory;