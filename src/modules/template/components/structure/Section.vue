<template>
 <el-collapse-item :name="id"  >

    <template slot="title">
        <el-button @click.native.stop="addRow" type="primary" icon="el-icon-plus" size="mini"> Add Row</el-button> 
        <i class="header-icon el-icon-star-on"></i> {{ title }} 
    </template>

    <div class="rows-wrapper" v-if="children">
        <draggable v-model="children" :component-data="getComponentData()">
            <div class="row-wrapper" v-for="row in children" :key="row.id">
                {{ row }}
            </div>
       </draggable>
    </div>
    {{ $data }}
</el-collapse-item>
</template>

<script>
import eventBus from 'core/eventBus';
import draggable from 'vuedraggable';
import { ROW_ADD_REQUEST, ROW_REORDER_REQUEST } from 'template/constants/events';
import Structure from 'template/core/structure';

export default {
    components: {
        draggable, 
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
        handleChange(event, ...params) {
            var { newIndex, oldIndex } = event; 
            console.log(newIndex, oldIndex, event)

            if ( newIndex != oldIndex ) {
                console.log(this.pChildren)
                this.$emit('reorder', this.pChildren);
                // eventBus.fireEvent(ROW_REORDER_REQUEST, { sectionId: this.id, newIndex, oldIndex });
            }
        },
        getComponentData() {
            return {
                // on: {
                //     update: this.handleChange,
                // },
                attrs:{
                    wrap: true
                },
            };
        }
    }
}
</script>

<style scoped>
.rows-wrapper {
    padding: 7px 14px;
}
.row-wrapper {
    margin-top: 5px;
    background-color: black;
    color: white;
}
</style>