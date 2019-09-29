<template>
<LabelWrapedStructure v-bind="$props">
    <select :placeholder="placeholder" class="form-control" key="top">
        <option v-for="item in extra.values" :key="item.value"  :value="item.value">{{ item.label }}</option>
    </select>
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from '$template/components/common/LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';

export default {
    components: { LabelWrapedStructure }, 
    mixins: [ controlMixin ],
}
</script>