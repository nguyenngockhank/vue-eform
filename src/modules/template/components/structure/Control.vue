<template>
<el-col v-bind="styleSpan" >
    <div class="control-wrapper" @dblclick="testUpdateState" >
        <div class="control-info">
            <span class="control-name" >{{ name }}</span>
            <span class="control-remove-icon" @click="removeControl"><i class="el-icon-close" /></span>
        </div>
            
        <!-- DISPLAY COMPONENT -->
        <component v-if="hasComponentDisplay" :is="componentDisplay" v-bind="$data" />
        <div v-if="!hasComponentDisplay" >
            {{ label.text }}
            <el-input disabled="" :placeholder="name" size="mini" ></el-input>
        </div>
    </div>
</el-col>
</template>

<script>
import eventBus from 'core/eventBus';
import {  CONTROL_REMOVE_REQUEST, UI_OPEN_EDIT_CONTROL_DIALOG } from '$template/constants/events';

import { plainObject } from 'utils/objectHelpers';
import CoreHandler from '$template/core';

import gridMixin from 'mixins/gridMixin'

export default {
    mixins: [ gridMixin ],
    props: [ 'id', 'sub_type', ],
    data() {
        const controlState = CoreHandler.getControlState(this.$props.id)
        return controlState;
    },
    computed: {
        componentDisplay() {
            return CoreHandler.getControlStructureComponent(this.sub_type);
        },
        hasComponentDisplay() {
            return !!this.componentDisplay;
        }
    },
    methods: {
        removeControl() {
            eventBus.fireEvent(CONTROL_REMOVE_REQUEST, { controlId: this.id });
        },
        testUpdateState() {
            eventBus.fireEvent(UI_OPEN_EDIT_CONTROL_DIALOG, { data: plainObject(this.$data) });
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
    padding: 2px 10px;
}
.control-info {
    text-align: right;
}
.control-name {
    background-color: #67C23A;
    padding: 0px 7px;
    color: white;
    border-radius: 4px;
}
.control-remove-icon {
    cursor: pointer;
}
.control-remove-icon:hover {
    color: red;
}
.control-wrapper.active {
    border: 1px solid aqua;
}
</style>