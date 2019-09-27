<template>
<LabelWrapedStructure v-bind="$props">
    <input v-model="value"  @input="onInput" :placeholder="placeholder" :type="inputType" class="form-control"  />
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from './LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';
import guiControlMixin from '$gui/mixins/guiControlMixin';

export default {
    mixins: [ controlMixin, guiControlMixin ],
    components: { LabelWrapedStructure },
    props: [ 'eformStore' ],
    computed: {
        inputType() {
            let { input_type = 'text'  } = this.extra || {};
            return input_type;
        },
    },
}
</script>