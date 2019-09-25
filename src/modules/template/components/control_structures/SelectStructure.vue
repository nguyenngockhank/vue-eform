<template>
<LabelWrapedStructure v-bind="$props">
    <select :placeholder="placeholder" class="form-control" key="top">
        <option value="">top</option>
    </select>
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from './LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';

export default {
    components: { LabelWrapedStructure }, 
    mixins: [ controlMixin ],
    computed: {
        optionList() {
            return [
                { 'value': 1, text: 'abc'}
            ];
        },
    }
}
</script>