class EntityRegistry {

    constructor(){
        this.allowedKeys = new Map;
        this.noFrozen = false;
    }

    register(key, value) {
        key = key.toLowerCase();

        // check if key existed
        if (this.has(key)) {
            // throw error if need to check 
            return false;
        }

        // freeze value
        if (!this.noFrozen) {
            Object.freeze(value);
        }
       
        this.allowedKeys.set(key, value);
        return true;
    }

    has(key) {
        return this.allowedKeys.has(key);
    }

    set (key, value) {
        if (!this.has(key)) {
            // throw error if need to check 
            return false;
        }

        // freeze value
        if (!this.noFrozen) {
            Object.freeze(value);
        }
        this.allowedKeys.set(key, value);
    }

    get (key) {
        if (!this.has(key)) {
            // throw error if need to check 
            return undefined;
        }

        return this.allowedKeys.get(key);
    }
}

export default EntityRegistry;