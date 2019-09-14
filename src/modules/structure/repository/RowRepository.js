import EntityRepository from './EntityRepository';

import rowFactory from '../factory/RowFactory';

import controlRepo from './ControlRepository';

class RowRepository extends EntityRepository {

    addControl( rowId, attrs ) {
        let rowData = this.find(rowId);
        if (!rowData) {
            return false;
        }

        const index = rowData.children.length; // last index 
        // more sub_type
        const controlData = controlRepo.add({ rowId: rowData.id, index, ...attrs });

        rowData.children.push(controlData);
        return controlData;
    }


    add(payload = { sectionId }) {
        var rowData = rowFactory.create(payload); 
        super.add(rowData);
        return rowData;
    }
}

export default new RowRepository;