<template>
<el-col v-bind="styleSpan">
    <div class="control-wrapper">
        <component :is="componentDisplay" v-bind="$props" />
    </div>
</el-col>
</template>

<script>
import { controlComponent } from '$gui/core/index';

import gridMixin from 'mixins/gridMixin'

export default {
    mixins: [ gridMixin ],

    props: [
        // 'children',
        'id',
        'placeholder',
        'styles',
        'sub_type',
        'label',
        'extra',
    ],

    computed: {
        componentDisplay() {
            return controlComponent(this.sub_type);
        }
    },
}
</script>