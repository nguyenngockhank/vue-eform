import EntityFactory from './EntityFactory';
import { TYPE_CONTROL, PREFIX_CONTROL_ID } from 'constants/entities';

class ControlFactory extends EntityFactory {
    
    constructor() {
        super( PREFIX_CONTROL_ID, TYPE_CONTROL);
    }

    /// build control data from registry

}

export default new ControlFactory;