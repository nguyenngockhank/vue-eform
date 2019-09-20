import EntityRepository from './EntityRepository';

class SectionRepository extends EntityRepository {

    
    addRow( sectionId ) {
        let sectionData = this.find(sectionId);
        if (!sectionData) {
            return false;
        }

        const rowRepo = this.page.rowRepo;

        const index = sectionData.children.length; // last index 
        const rowData = rowRepo.add({ sectionId: sectionData.id, index });

        sectionData.children.push(rowData);
        return rowData;
    }

    removeRow(rowId) {
        const rowRepo = this.page.rowRepo;

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
        const sectionFactory = this.page.sectionFactory;
        // create main entity
        var sectionData = sectionFactory.create(payload); 
        super.add(sectionData);
        return sectionData;
    }
    
}

export default SectionRepository;