<template>
<LabelWrapedStructure v-bind="$props">
    <textarea class="form-control" :class="inputClasses" :placeholder="placeholder" 
        v-model="value" @input="onInput" @blur="onBlur" :rows="extra.rows"  ></textarea>
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from './LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';
import guiControlMixin from '$gui/mixins/guiControlMixin';

export default {
    mixins: [ controlMixin, guiControlMixin ],
    components: { LabelWrapedStructure },
}
</script>