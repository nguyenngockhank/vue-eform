import { plainObject } from 'utils/objectHelpers';

export default {
    props: [ 'extra' ],
    data() {
        // 
        return {
            options: {}
        };
    },

    watch: {
        extra: {
            // watch props to change local state
            handler(newVal) {
                this.options = newVal;
            },
            immediate: true,
        }
    },
    methods: {
        getValue() {
            return plainObject(this.options);
        }
    }
}