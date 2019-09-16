<template>
<el-col v-bind="styles.span" >
    <div class="control-wrapper"   @dblclick="testUpdateState" >
        <span class="control-remove-icon" @click="removeControl"><i class="el-icon-close" /></span>
        {{ id }} - {{ sub_type }} - {{ label.text }}
    </div>
</el-col>
</template>

<script>
import eventBus from 'core/eventBus';
import CoreHandler from '$template/core';
import {  CONTROL_REMOVE_REQUEST } from '$template/constants/events';


export default {
    props: [ 'id', 'sub_type', ],
    data() {
        const controlState = CoreHandler.getControlState(this.$props.id)
        return controlState;
    },
    methods: {
        removeControl() {
            eventBus.fireEvent(CONTROL_REMOVE_REQUEST, { controlId: this.id });
        },
        testUpdateState() {
            this.label.text = 'UPDATED TEXT LABEL';
            this.styles.span.lg = 8;

            // console.log(this.$data)
            this.is_multiline = !this.is_multiline;
        }
    }
}
</script>

<style scoped>
.control-wrapper {
    position: relative;
    border: 1px solid #aaa;
    background-color: #fff;
    
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
}
.control-remove-icon {
    /* display: none; */
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    top: -2px;
    right: -15px;
}
.control-remove-icon:hover {
    cursor: pointer;
    color: red;
}
.control-wrapper:hover .control-remove-icon {
    display: block;
}


.control-wrapper.active {
    border: 1px solid aqua;
}
</style>