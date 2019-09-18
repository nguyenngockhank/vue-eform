import EntityRegistry from 'core/entityRegistry';

class ControlStructureComponentRegistry extends EntityRegistry {
    constructor() {
        super();
        this.noFrozen = true;
    }
}

export default new ControlStructureComponentRegistry;

