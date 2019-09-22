import EntityRepository from './EntityRepository';

class RowRepository extends EntityRepository {

    addControl( rowId, attrs ) {
        let rowData = this.find(rowId);
        if (!rowData) {
            return false;
        }
        const controlRepo = this.page.controlRepo;

        const index = rowData.children.length; // last index 
        // more sub_type
        const controlData = controlRepo.add({ rowId: rowData.id, index, ...attrs });

        rowData.children.push(controlData);
        return controlData;
    }

    removeControl(controlId) {
        const controlRepo = this.page.controlRepo;

        const controlData = controlRepo.find(controlId); 
      
        if (!controlData) {
            return false; 
        }

        const { rowId } = controlData;

        // remove from repo 
        controlRepo.remove(controlId);

        // remove from data structure 
        const rowData = this.find(rowId);
        rowData.children = rowData.children.filter((e) => e.id != controlId)
    }


    add(payload = { sectionId }) {
        const rowFactory = this.page.rowFactory;

        var rowData = rowFactory.create(payload); 
        super.add(rowData);
        return rowData;
    }
}

export default  RowRepository;