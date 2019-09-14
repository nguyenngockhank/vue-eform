import EntityFactory from './EntityFactory';
import { TYPE_CONTROL, PREFIX_CONTROL_ID } from 'constants/entities';

class RowFactory extends EntityFactory {
    
    constructor() {
        super(PREFIX_CONTROL_ID, TYPE_CONTROL);
    }

}

export default new RowFactory;