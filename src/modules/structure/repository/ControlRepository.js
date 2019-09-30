import EntityRepository from './EntityRepository';
import { extendDeep } from 'utils/objectHelpers';

class ControlRepository extends EntityRepository {

    add(payload = { rowId }) {
        let controlFactory = this.page.controlFactory;
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

    validationSchema() {
        const schema = {};
        return schema;
    }
}

export default ControlRepository;