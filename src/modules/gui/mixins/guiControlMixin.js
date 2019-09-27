export default {
    props: [ 'eformStore' ],
    data() {
        return {
            value: '',
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
        }
    }
}