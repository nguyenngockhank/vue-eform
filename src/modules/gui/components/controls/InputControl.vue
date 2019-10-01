<template>
<LabelWrapedStructure v-bind="$props">
    <input class="form-control" :class="inputClasses" v-model="value"  
        @input="onInput" @blur="onBlur" 
        :placeholder="placeholder" :type="inputType"  />
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