import EventBus from './eventBus';

var instance = {

    get EventBus() {
        // lazy load 
        if (!this._eventBus) {
            this._eventBus = EventBus.getInstance();
        }
        return this._eventBus;
    }
};

export default instance;