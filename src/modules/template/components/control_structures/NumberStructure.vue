<template>
<div>
    <label :style="labelStyle">{{ label.text }}</label>
    <div :style="inputWrapperStyle">
        <el-input-number style="width: 100%;" disabled :placeholder="name" size="mini" ></el-input-number>
    </div>
</div>
</template>
<script>
import controlMixin from 'mixins/controlMixin';

export default {
    mixins: [ controlMixin ],
}
</script>