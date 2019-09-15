<template>
<div class="row-wrapper">

    <div class="row-toolbar">
        <span>
            <el-button @click.native.stop="addControl" type="primary" icon="el-icon-plus" size="mini">Add Control</el-button>

            ({{ id }})
        </span>
        <span>
            <el-button @click.native.stop="removeRow" type="danger" icon="el-icon-remove" size="mini"></el-button>
        </span>
    </div>


    <el-row class="row-body">
        <draggable v-model="children" >
            <Control v-for="control in children" :key="control.id" v-bind="control" />
        </draggable>
        <div v-if="children.length == 0">[ EMPTY ROW ]</div>
    </el-row>

</div>
</template>

<script>
import eventBus from 'core/eventBus';
import draggable from 'vuedraggable';
import {  ROW_REMOVE_REQUEST, CONTROL_ADD_REQUEST } from '$template/constants/events';
import Control from './Control';
import CoreHandler from '$template/core';


export default {
    props: [ 'id', 'index'],
    components: { Control },
    data() {
        const rowState = CoreHandler.getRowState(this.$props.id)
        return rowState;
    },
    created() {
        console.log('created row hook: ', this)
    },
    watch: {
        children(newValue) {
            /// update index 
            newValue.forEach((e, index) => e.index = index );
        }
    },
    methods: {
        addControl() {
            const subType = 'text';
            const controlAtrr = CoreHandler.getControlAttr(subType);
            // sub_type: text, number, ... 
            eventBus.fireEvent(CONTROL_ADD_REQUEST, {  ...controlAtrr, sub_type: subType, rowId: this.id });
        }, 
        removeRow() {
            eventBus.fireEvent(ROW_REMOVE_REQUEST, { rowId: this.id });
        }
    }
}
</script>


<style scoped>
.row-wrapper {
    margin-bottom: 5px;
    /* background-color: black;
    color: white; */
}
.row-toolbar {
    display: flex;
    padding: 7px 5px;
    background: black;
    color: white;
    justify-content: space-between;
    align-items: center;
}

.row-body {
    border: 1px solid #000;
    padding: 7px 5px;
    background-color: #eee;
}

.clearfix {
    clear: box;
}
</style>