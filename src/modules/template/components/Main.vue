<template>
<div>
    <h1>Welcome to EForm Template Builder</h1>

    <p>This is a line to prove this component working!</p>

    <div class="build-wrapper">
        <el-row>
            <el-col :span="16">
                <el-button @click.native="addSection" type="primary" icon="el-icon-plus" > Add Section</el-button>

                <el-collapse v-model="activeSections" >
                    <draggable v-model="structure.children" class="structure-wrapper">
                        <Section  v-for="section in structure.children"   
                            class="section-wrapper"  v-bind="section" :key="section.id" v-model="section.children" ></Section>
                    </draggable>
                </el-collapse>
                <el-button @click.native="addSection" type="primary" icon="el-icon-plus" > Add Section</el-button>
            </el-col>

            <el-col :span="8">
                <h3>Data template</h3>
                <pre>{{ $data }}</pre>
            </el-col> 

        </el-row>
    </div>    
</div>
</template>

<script>
import eventBus from 'core/eventBus';
import draggable from 'vuedraggable';
import Section from './structure/Section';
import { SECTION_ADD_REQUEST,  SECTION_ADDED, ROW_ADD_REQUEST } from '$template/constants/events';

import CoreHandler from '$template/core';

export default {
    components: {
        draggable, Section
    },
    data() {

        return {
            structure: CoreHandler.getPageState(), 
            // open collapse 
            activeSections: [],
        } 
    },
    created() {

        eventBus.addListener(SECTION_ADDED, ({ sectionId }) => {
            this.activeSections.push(sectionId);

            // fire event to add a new row 
            eventBus.fireEvent(ROW_ADD_REQUEST, { sectionId });
            eventBus.fireEvent(ROW_ADD_REQUEST, { sectionId });
        });


        this.addSection('First section');
        this.addSection('Second section');
    },
    methods: {
        addSection(title = 'Random title') {
            if ( typeof title != 'string') {
                title = 'Random title';
            }
            eventBus.fireEvent(SECTION_ADD_REQUEST, { title });
        }
    }
}
</script>

<style scoped>
.build-wrapper {
    display: block;
}
</style>

<style >
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.pull-right {
    float: right;
}
.structure-wrapper {
    /* border: 1px solid #ddd; */
    margin: 20px 0;
}
.section-wrapper {
    padding: 0 ;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    margin-top: 10px;
}

.el-collapse {
    border-top: none;
    border-bottom: none;
}
.el-collapse-item__header {
    background-color: #f1f1f1;
}
.el-collapse-item__content {
    padding-bottom: 0px;
}
</style>