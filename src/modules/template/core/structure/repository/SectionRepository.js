import EntityRepository from './EntityRepository';

import sectionFactory from '../factory/SectionFactory';

import rowRepository from './RowRepository';

class SectionRepository extends EntityRepository {

    
    addRow( sectionId ) {
        let sectionData = this.find(sectionId);
        if (!sectionData) {
            return false;
        }

        const index = sectionData.children.length; // last index 
        const rowData = rowRepository.add({ sectionId: sectionData.id, index });

        sectionData.children.push(rowData);

        return rowData;
    }


    add(payload) {
        // create main entity
        var sectionData = sectionFactory.create(payload); 
        super.add(sectionData);
        return sectionData;
    }
    
}

export default new SectionRepository;