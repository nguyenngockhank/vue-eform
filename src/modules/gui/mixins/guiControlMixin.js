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
        }, 
        onBlur(e) {
            let isInvalid = false;
            if (this.errorStore && this.errorStore[this.name]) {
                isInvalid = true;
            }
            this.isInvalid = isInvalid;
        }
    }
}