<template>
<el-col v-bind="styles.span" >
    <div class="control-wrapper"   @dblclick="testUpdateState" >
        {{ id }} - {{ sub_type }} - {{ label.text }}
    </div>
</el-col>
</template>

<script>
import eventBus from 'core/eventBus';
import CoreHandler from '$template/core';


export default {
    props: [ 'id', 'sub_type', ],
    data() {
        const controlState = CoreHandler.getControlState(this.$props.id)
        return controlState;
    },
    methods: {
        testUpdateState() {
            this.label.text = 'UPDATED TEXT LABEL';
            this.is_multiline = !this.is_multiline;
        }
    }
}
</script>

<style scoped>
.control-wrapper {
    border: 1px solid #aaa;
    padding: 5px;
    background-color: #fff;
}
.control-wrapper.active {
    border: 1px solid aqua;
}
</style>