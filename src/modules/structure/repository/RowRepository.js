import EntityRepository from './EntityRepository';

import rowFactory from '../factory/RowFactory';

class RowRepository extends EntityRepository {

    constructor() {
        super(); 
        this.sectionMap = new Map();
    }

    listOfSection(sectionId) {

    }


    add(payload = { sectionId }) {
        var rowData = rowFactory.create(payload); 
        super.add(rowData);
        return rowData;
    }
}

export default new RowRepository;