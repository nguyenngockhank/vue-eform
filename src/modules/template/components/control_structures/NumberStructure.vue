<template>
<div>
    <label :style="labelStyle">{{ label.text }}</label>
    <div :style="inputWrapperStyle">
        <el-input-number style="width: 100%;" disabled :placeholder="name" size="mini" ></el-input-number>
    </div>
</div>
</template>
<script>
import controlStructureMixin from '$template/utils/controlStructureMixin';

export default {
    mixins: [ controlStructureMixin ],
}
</script>