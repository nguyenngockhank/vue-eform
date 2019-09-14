import EntityRepository from './EntityRepository';

import controlFactory from '../factory/ControlFactory';

class ControlRepository extends EntityRepository {


    add(payload = { rowId }) {
        var controlData = controlFactory.create(payload); 
        super.add(controlData);
        return controlData;
    }
}

export default new ControlRepository;