<template>
<el-col v-bind="styleSpan">
    <div class="control-wrapper">
        <component :is="componentDisplay" v-bind="$props" />
    </div>
</el-col>
</template>

<script>
import { controlComponent } from '$gui/core/index';

export default {
    props: [
        'children',
        'id',
        'styles',
        'sub_type',
        'label',
        'extra',
    ],

    computed: {
        styleSpan(){
            const spanStyle = this.styles.span;
              // var spanStyle = this.styles.span;
            if (!spanStyle.responsive) {
                return { span: spanStyle.value } ;
            }

            return {
                xl: spanStyle.xl,
                lg: spanStyle.lg,
                md: spanStyle.md,
                sm: spanStyle.sm,
                xs: spanStyle.xs,
            }
            return this.calculateSpan(this.styles.span);
        },
        componentDisplay() {
            return controlComponent(this.sub_type);

            return controlComponent(this.sub_type);
        }
    },
}
</script>