class EntityRegistry {

    construct(){
        this.allowedKeys = new Map;
    }

    register(key, value) {
        key = key.toLowerCase();

        // check if key existed
        if (this.has(key)) {
            // throw error if need to check 
            return false;
        }

        // freeze value
        Object.freeze(value);
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
        Object.freeze(value);
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