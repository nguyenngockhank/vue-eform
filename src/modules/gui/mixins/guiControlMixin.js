export default {
    props: [ 'eformStore', 'errorStore' ],
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
        'eformStore': {
            handler(store) {
                if (store) {
                    this.value  = store[this.name];
                }
            }, 
            immediate: true,
        }
    },
    methods: {
        onInput(e) {
            // update store
            this.eformStore[this.name] = this.value;

            if (this.isInvalid) {
                this.$nextTick(() => this.validate());
            }
        }, 
        onBlur(e) {
            this.validate(); 
            // do more thing here maybe
        }, 
        validate() {
            let isInvalid = false;
            if (this.errorStore && this.errorStore[this.name]) {
                isInvalid = true;
            }
            this.isInvalid = isInvalid;
        }
    }
}