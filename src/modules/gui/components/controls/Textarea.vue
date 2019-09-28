<template>
<LabelWrapedStructure v-bind="$props">
    <textarea :placeholder="placeholder" v-model="value" @input="onInput" :rows="extra.rows"  class="form-control" ></textarea>
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