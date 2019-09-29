<template>
<LabelWrapedStructure v-bind="$props">
    <textarea :placeholder="placeholder" :rows="extra.rows"  class="form-control" ></textarea>
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