import createValueStore from './createValueStore'
import createErrorStore from './createErrorStore'
import buildValidationSchema from './buildValidationSchema'
import { observe } from 'core/observable';
import { Logger, validate } from '$gui/utils';

class EForm {

    /// formStructure a.k.a pageStructure
    constructor(formStructure) {
        this.setStructure(formStructure);
    }

    setStructure(formStructure) {
        this.structure = formStructure;
    }

    ////////////////////////////////////////////////////
    /////////////// VALUE STORE
    ////////////////////////////////////////////////////
    getValueStore() {
        return this.valueStore;
    }

    _resetValueWatchers(){
        /// remove all old watchers 
        if (this.unwatchValueStoreFns) {
            this.unwatchValueStoreFns.forEach(fn => fn());
        }
        // reset
        this.unwatchValueStoreFns = [];
    }

    createValueStore(formValue, onStoreChange) {
        const controlRepo = this.structure.get('controlRepo');
        this.valueStore = createValueStore(controlRepo, formValue);

        this._resetValueWatchers();
        

        /// create watchers 
        controlRepo.map.forEach(( { name }  = controlData )  => {
            let unwatch = observe(() => {
                // console.log( 'Control ', name , ' change to',  this.valueStore[name])
                if ( onStoreChange ) {
                    onStoreChange(name, this.valueStore[name]);
                }

                // validate after set value
                this.validateControl(name);
            });
            this.unwatchValueStoreFns.push(unwatch);
        })

        return this.valueStore;
    }
    ////////////////////////////////////////////////////


    ////////////////////////////////////////////////////
    /////////////// VALIDATION
    ////////////////////////////////////////////////////
    getErrorStore() {
        return this.errorStore;
    }

    _resetErrorWatchers(){
        /// remove all old watchers 
        if (this.unwatchErrorStoreFns) {
            this.unwatchErrorStoreFns.forEach(fn => fn());
        }
        // reset
        this.unwatchErrorStoreFns = [];
    }

    createErrorStore(onStoreChange) {
        const controlRepo = this.structure.get('controlRepo');
        this.validationSchema = buildValidationSchema(controlRepo);
        Logger.i('[VALIDATION SCHEMA]', this.validationSchema);

        this.errorStore = createErrorStore(controlRepo);
        this._resetErrorWatchers();

        /// init
        controlRepo.map.forEach(( { name }  = controlData )  => {
            // first validate
            this.validateControl(name);

            // add watchers
            let unwatch = observe(() => {
                if (onStoreChange) {
                    onStoreChange(name, this.valueStore[name]);
                }
            });

            this.unwatchValueStoreFns.push(unwatch);
        });



        return this.errorStore;
    }

    validateControl(name) {
        if(!this.validationSchema || !this.validationSchema[name]) {
            return
        }
        const valObj = { [name] : this.valueStore[name] };
        const shemaObj = { [name]:  this.validationSchema[name] };
        const valid = validate(valObj, shemaObj);

        this.errorStore[name] = valid;
        // Logger.i(' Validate control ', valObj, shemaObj, valid, name);
    }

    validate() {

    }
}

export default EForm;


