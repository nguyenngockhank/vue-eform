<template>
<div class="row-wrapper">

    <div class="row-toolbar">
        <span>
            <el-dropdown trigger="click"  @command="addControl">
                <el-button type="primary" size="mini">
                   <i class="el-icon-plus" /> Add Control <i class="el-icon-arrow-down" /> 
                </el-button>

                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="item in dropdownControlItems" :command="item.key" :key="item.key" :icon="item.icon">
                        {{ item.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>    

            ({{ id }})
        </span>
        <span>
            <el-button @click.native.stop="removeRow" type="danger" icon="el-icon-remove" size="mini"></el-button>
        </span>
    </div>


    <el-row >
        <draggable group="control" @add="onAddControl" v-model="children" >
            <Control v-for="control in children" :key="control.id" v-bind="control" />
        </draggable>
        <div v-if="children.length == 0">[ EMPTY ROW ]</div>
    </el-row>

</div>
</template>

<script>
import eventBus from 'core/eventBus';
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
    computed: {
        // it means controls must be registered before CoreHandler init =)) 
        // because this value of this method never change. Why? It's not a obserable vars.
        dropdownControlItems() {
            return CoreHandler.datasourceControlList();
        }
    },
    watch: {
        children(newValue) {
            /// update index & parentId
            newValue.forEach((e, index) => {
                e.index = index; 
                e.rowId = this.id;
            });

            // this.$nextTick(() =>  console.log(newValue))
           ;
        }
    },
    methods: {
        addControl(val) {
            const subType = val;
            const controlAtrr = CoreHandler.getControlAttr(subType);
            // sub_type: text, number, ... 
            eventBus.fireEvent(CONTROL_ADD_REQUEST, {  ...controlAtrr, sub_type: subType, rowId: this.id });
        }, 
        removeRow() {
            eventBus.fireEvent(ROW_REMOVE_REQUEST, { rowId: this.id });
        },

        onAddControl(e) {
            console.log('>>> on add conttrol to row id', this.id, ' . ', e )
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