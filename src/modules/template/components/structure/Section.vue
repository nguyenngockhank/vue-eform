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

    <div class="rows-wrapper" v-if="children">
        <draggable v-model="children" >
            <Row v-for="row in children" :key="row.id" v-bind="row"  />
       </draggable>
    </div>
</el-collapse-item>
</template>

<script>
import Row from './Row';
import eventBus from 'core/eventBus';
import draggable from 'vuedraggable';

import { ROW_ADD_REQUEST, SECTION_REMOVE_REQUEST } from 'template/constants/events';
import Structure from 'template/core/structure';

export default {
    components: {
        draggable, Row
    },
    model: {
        prop: 'children',
        event: 'reorder',
    },
    props: [ 'title', 'id'],
    data() {
        const sectionState = Structure.getSectionState(this.$props.id)
        console.log(">>> sectionState of ", this.$props.id, sectionState)

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
        // handleChange(event, ...params) {
        //     var { newIndex, oldIndex } = event; 
        //     console.log(newIndex, oldIndex, event)

        //     if ( newIndex != oldIndex ) {
        //         console.log(this.pChildren)
        //         this.$emit('reorder', this.pChildren);
        //         // eventBus.fireEvent(ROW_REORDER_REQUEST, { sectionId: this.id, newIndex, oldIndex });
        //     }
        // },
        // getComponentData() {
        //     return {
        //         // on: {
        //         //     update: this.handleChange,
        //         // },
        //         attrs:{
        //             wrap: true
        //         },
        //     };
        // }
    }
}
</script>

<style scoped>
.rows-wrapper {
    padding: 7px 14px;
}
.section-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>