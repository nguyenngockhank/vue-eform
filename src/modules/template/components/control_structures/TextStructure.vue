<template>
<div>
    <label :style="labelStyle">{{ label.text }}</label>
    <el-input :type="inputType" disabled="" :placeholder="name" size="mini" ></el-input>
</div>
</template>
<script>
import controlStructureMixin from '$template/utils/controlStructureMixin';

export default {
    mixins: [ controlStructureMixin ],
    computed: {
        inputType() {
            const extra = this.extra;
            if(extra && extra.is_multiline) {
                return 'textarea';
            }

            return 'text';
        },
     
    }
}
</script>