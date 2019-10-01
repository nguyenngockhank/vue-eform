export default {
    computed: {
        formCheckClasses() {
            const { layout } = this.extra;
            return {
                'form-check-inline': layout === 'inline'
            };
        }
    },
    methods: {
        domId(item) {
            return this.name + '__' + item.value;
        },
    }
}