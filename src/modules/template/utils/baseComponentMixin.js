import { BModal, VBModal } from 'bootstrap-vue';

export default {
    components: {
        'b-modal': BModal,
    },
    directives: {
        // Note that Vue automatically prefixes directive names with `v-`
        'b-modal': VBModal,
    }
}