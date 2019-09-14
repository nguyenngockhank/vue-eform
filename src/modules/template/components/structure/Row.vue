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

    <div class="row-body">
       <draggable v-model="children" >
            <div class="ef-control" v-for="control in children" :key="control.id" v-bind="control" >
                {{ control }}
            </div>
       </draggable>
    </div>


</div>
</template>

<script>
import eventBus from 'core/eventBus';
import draggable from 'vuedraggable';
import {  ROW_REMOVE_REQUEST, CONTROL_ADD_REQUEST } from '$template/constants/events';
import CoreHandler from '$template/core';


export default {
    props: [ 'id', 'index'],
    data() {
        const rowState = CoreHandler.getRowState(this.$props.id)
        return rowState;
    },
    watch: {
        children(newValue) {
            /// update index 
            newValue.forEach((e, index) => e.index = index );
        }
    },
    methods: {
        addControl() {
            const controlAtrr = CoreHandler.getControlAttr('text');
            // sub_type: text, number, ... 
            eventBus.fireEvent(CONTROL_ADD_REQUEST, {  ...controlAtrr, rowId: this.id });
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
    border: 1px solid #ccc;
}

.clearfix {
    clear: box;
}

ef-control {
    display: inline-block;
    width: 30%;
}
</style>