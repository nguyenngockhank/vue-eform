<template>
 <el-collapse-item :name="id"  >

    <template slot="title">
        <el-button @click.native.stop="addRow" type="primary" icon="el-icon-plus" size="mini"> Add Row</el-button> 
        <i class="header-icon el-icon-star-on"></i> {{ title }} 
    </template>

    <div class="rows-wrapper" v-if="children">
        <draggable v-model="rowOrder" :component-data="getComponentData()">
            <div class="row-wrapper" v-for="row in children" :key="row.id">
                {{ row }}
            </div>
       </draggable>
    </div>
    {{ rowOrder }}
</el-collapse-item>
</template>

<script>
import eventBus from 'core/eventBus';
import draggable from 'vuedraggable';
import { ROW_ADD_REQUEST, ROW_REORDER_REQUEST } from '../../constants/events';


export default {
    components: {
        draggable, 
    },
    props: [ 'title', 'children', 'id'],
    data() {
        return {
            rowOrder: [],
        }
    },
    created() {
        this.rowOrder = this.children.map(el => el.id );
    },
    watch: {
        children(newVal , oldVal) {
            // console.log('>>> new val', newVal, '>>> old val', oldVal)
            this.rowOrder = newVal.map(el => el.id );
        }
    },
    methods: {
        addRow() {
            eventBus.fireEvent(ROW_ADD_REQUEST, { sectionId: this.id });
        }, 
        handleChange(event, ...params) {
            var { newIndex, oldIndex } = event; 
            // console.log(params)

            if ( newIndex != oldIndex ) {
                eventBus.fireEvent(ROW_REORDER_REQUEST, { sectionId: this.id, newIndex, oldIndex });
            }
        },
        getComponentData() {
            return {
                on: {
                    change: this.handleChange,
                },
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