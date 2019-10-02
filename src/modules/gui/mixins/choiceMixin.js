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
            return this.eform.id + '__' + this.name + '__' + item.value;
        },
    }
}