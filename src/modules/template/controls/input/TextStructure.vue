<template>
<LabelWrapedStructure v-bind="$props">
    <input :placeholder="placeholder"  :type="inputType" class="form-control"  />
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from '$template/components/common/LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';

export default {
    components: { LabelWrapedStructure }, 
    mixins: [ controlMixin ],
    computed: {
        inputType() {
            let { input_type = 'text'  } = this.extra || {};
            return input_type;
        },
    }
}
</script>