import EntityRepository from './EntityRepository';

import controlFactory from '../factory/ControlFactory';

import { extendDeep } from 'utils/objectHelpers';

class ControlRepository extends EntityRepository {


    add(payload = { rowId }) {
        var controlData = controlFactory.create(payload); 
        super.add(controlData);
        return controlData;
    }

    update(controlId, attrs) {
        const controlData = this.find(controlId);
        if (!controlData) {
            return;
        }

        extendDeep(controlData, attrs);
        return controlData;
    }
}

export default new ControlRepository;