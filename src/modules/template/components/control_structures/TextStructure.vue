<template>
<div>
    <label :style="labelStyle">{{ label.text }}</label>
    <el-input :type="inputType" disabled="" :placeholder="name" size="mini" ></el-input>
</div>
</template>
<script>
export default {
    props: [ 'extra', 'name', 'label'], 
    computed: {
        inputType() {
            const extra = this.extra;
            if(extra && extra.is_multiline) {
                return 'textarea';
            }

            return 'text';
        },
        labelStyle() {
            const label = this.label;
            const result = { };

            if (label.underline) {
                result['text-decoration'] = 'underline';
            }

            if (label.bold) {
                result['font-weight'] = 700;
            }

            if (label.italic) {
                result['font-style'] = 'italic';
            }

            return result;
        }
    }
}
</script>