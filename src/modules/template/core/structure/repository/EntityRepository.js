class EntityRepository {

    constructor() {
        this.map = new Map(); 
    }

    add( entityData ) {
        // call factory 
        this.map.set(entityData.id, entityData);
    }


    find(entityId) {
        if (this.map.has(entityId)) {
            return this.map.get(entityId);
        }
        return null;
    }

    remove(entityId) {
        return this.map.remove(entityId);
    }

}

export default EntityRepository;