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
        CONTROL O DAY
    </div>

   
</div>
</template>

<script>
import eventBus from 'core/eventBus';
import draggable from 'vuedraggable';
import {  ROW_REMOVE_REQUEST } from '$template/constants/events';

export default {
    props: [ 'id', 'index'],

    methods: {
        addControl() {
            console.log('add control')
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
</style>