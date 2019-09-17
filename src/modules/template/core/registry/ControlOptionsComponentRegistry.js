import EntityRegistry from 'core/entityRegistry';

/// key is a subtype of control
/// value is list of attributes of that subtype control
class ControlOptionsComponentRegistry extends EntityRegistry {
    constructor() {
        super();
        this.noFrozen = true;
    }
}

export default new ControlOptionsComponentRegistry;

