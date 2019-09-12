<template>
 <el-collapse-item  :name="id"   >

    <template slot="title">
        <el-button @click.native.stop="addRow" type="primary" icon="el-icon-plus" size="mini"> Add Row</el-button> 
        <i class="header-icon el-icon-star-on"></i> {{ title }} 
    </template>

    <div class="rows-wrapper" v-if="children">
        <div class="row-wrapper" v-for="row in children" :key="row.id">
            {{ row }}
        </div>
    </div>

</el-collapse-item>

</template>

<script>
import eventBus from 'core/eventBus';
import { ROW_ADDING } from '../../constants/events';


export default {
    props: [ 'title', 'children', 'id'],
    methods: {
        addRow() {
            eventBus.fireEvent(ROW_ADDING, { sectionId: this.id });
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