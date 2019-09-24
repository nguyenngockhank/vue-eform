class EntityRepository {

    constructor(page) {
        this.map = new Map(); 
        this.setPage(page);
    }

    size() {
        return this.map.length;
    }

    setPage(page) {
        this.page = page;
    }

    set(entityId, entityData) {
        this.map.set(entityId, entityData);
        // console.log( `Added new ${entityData.id} entity to ` , this.constructor.name,  this.map.size );
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
        return this.map.delete(entityId);
    }

    clear() {
        return this.map.clear();
    }
}

export default EntityRepository;