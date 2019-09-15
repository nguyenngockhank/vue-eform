<template>
 <el-collapse-item :name="id"  >

    <template slot="title">
        <div class="section-toolbar">
            <el-button @click.native.stop="removeSection" type="danger" icon="el-icon-remove" size="mini"></el-button>
            <span>
                <el-button @click.native.stop="addRow" type="primary" icon="el-icon-plus" size="mini"> Add Row</el-button> 
                <i class="header-icon el-icon-star-on"></i> (<strong>{{id}}</strong>) - {{ title }} 
            </span>
        </div>
        
    </template>

    <div class="section-body" v-if="children">
        <draggable v-model="children" >
            <Row v-for="row in children" :key="row.id" v-bind="row"  />
       </draggable>
        <div v-if="children.length == 0">[ EMPTY SECTION ]</div>
    </div>
</el-collapse-item>
</template>

<script>
import Row from './Row';
import eventBus from 'core/eventBus';

import { ROW_ADD_REQUEST, SECTION_REMOVE_REQUEST } from '$template/constants/events';
import CoreHandler from '$template/core';

export default {
    components: {
         Row
    },
    model: {
        prop: 'children',
        event: 'reorder',
    },
    props: [ 'title', 'id'],
    data() {
        const sectionState = CoreHandler.getSectionState(this.$props.id)
        // console.log(">>> sectionState of ", this.$props.id, sectionState)
        return sectionState;
    },
    watch: {
        children(newValue) {
            /// update index 
            newValue.forEach((e, index) => e.index = index );
        }
    },
    methods: {
        addRow() {
            eventBus.fireEvent(ROW_ADD_REQUEST, { sectionId: this.id });
        }, 
        removeSection() {
            /// TODO: confirm ?
            eventBus.fireEvent(SECTION_REMOVE_REQUEST, { sectionId: this.id });
        }
    }
}
</script>

<style scoped>
.section-body {
    padding: 7px ;
}
.section-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>