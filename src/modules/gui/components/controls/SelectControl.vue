<template>
<LabelWrapedStructure v-bind="$props">
    <select  v-model="value" @change="onInput"  :placeholder="placeholder" class="form-control" key="top">
        <option disabled>Select one</option>
        <option v-for="item in extra.values" :key="item.value"  :value="item.value">{{ item.label }}</option>
    </select>
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