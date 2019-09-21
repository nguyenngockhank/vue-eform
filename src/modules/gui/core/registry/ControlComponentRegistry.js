import EntityRegistry from 'core/entityRegistry';

class ControlComponentRegistry extends EntityRegistry {
    constructor() {
        super();
        this.noFrozen = true;
    }
}

export default new ControlComponentRegistry;

