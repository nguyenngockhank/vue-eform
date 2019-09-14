import EntityRepository from './EntityRepository';

import sectionFactory from '../factory/SectionFactory';

import rowRepo from './RowRepository';

class SectionRepository extends EntityRepository {

    
    addRow( sectionId ) {
        let sectionData = this.find(sectionId);
        if (!sectionData) {
            return false;
        }

        const index = sectionData.children.length; // last index 
        const rowData = rowRepo.add({ sectionId: sectionData.id, index });

        sectionData.children.push(rowData);
        return rowData;
    }

    removeRow(rowId) {
        const rowData = rowRepo.find(rowId); 
        const { sectionId } = rowData;

        if (!rowData) {
            return; 
        }

        // remove from repo 
        rowRepo.remove(rowId);

        // remove from data structure 
        const sectionData = this.find(sectionId);
        sectionData.children = sectionData.children.filter((e) => e.id != rowId)
    }



    add(payload) {
        // create main entity
        var sectionData = sectionFactory.create(payload); 
        super.add(sectionData);
        return sectionData;
    }
    
}

export default new SectionRepository;