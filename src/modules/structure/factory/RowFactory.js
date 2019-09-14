import EntityFactory from './EntityFactory';
import { TYPE_ROW, PREFIX_ROW_ID } from 'constants/entities';

class RowFactory extends EntityFactory {
    
    constructor() {
        super(PREFIX_ROW_ID, TYPE_ROW);
    }

}

export default new RowFactory;