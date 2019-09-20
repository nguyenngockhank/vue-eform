import EntityFactory from './EntityFactory';
import { TYPE_SECTION, PREFIX_SECTION_ID } from 'constants/entities';
class SectionFactory extends EntityFactory {
    
    constructor() {
        super(PREFIX_SECTION_ID, TYPE_SECTION);
    }

}


export default  SectionFactory;