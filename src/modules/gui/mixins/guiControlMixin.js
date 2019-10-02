export default {
    props: [ 'eformStore', 'errorStore', 'eform' ],
    // eformStore: null,
    // errorStore: null,
    data() {
        return {
            value: '',
            isInvalid: false,
        }
    },
    computed: {
        inputClasses() {
            return {
                'is-invalid': !!this.isInvalid,
            }
        }
    },
    watch: {
        'eform': {
            handler(eform) {
                if (eform) {
                    const store = eform.getValueStore();
                    this.value  = store[this.name];
                }
            }, 
            immediate: true,
        }
    },
    methods: {
        onInput(e) {
            const store = this.eform.getValueStore()
            // update store
            store[this.name] = this.value;

            if (this.isInvalid) {
                this.$nextTick(() => this.validate());
            }
        }, 
        onBlur(e) {
            this.validate(); 
            // do more thing here maybe
        }, 
        validate() {
            const errorStore = this.eform.getErrorStore()

            let isInvalid = false;
            if (errorStore && errorStore[this.name]) {
                isInvalid = true;
            }
            this.isInvalid = isInvalid;
        }
    }
}