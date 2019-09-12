<template>
<div>
    <h1>Welcome to EForm Template Builder</h1>

    <p>This is a line to prove this component working!</p>

    <el-button @click.native="addSection" type="primary" icon="el-icon-plus" > Add Section</el-button>

    <el-collapse v-model="activeSections" >
        <draggable v-model="structure.children" class="structure-wrapper">

            <Section  v-for="section in structure.children"   
                 class="section-wrapper"   v-bind="section"  :key="section.id"  ></Section>
        
        </draggable>
    </el-collapse>

    <el-button @click.native="addSection" type="primary" icon="el-icon-plus" > Add Section</el-button>


    <h3>Data template</h3>
    <pre>{{ $data }}</pre>
</div>
</template>

<script>
import draggable from 'vuedraggable';

import Section from './structure/Section';

import factory from '../utils/factory';

export default {
    components: {
        draggable, Section
    },
    data() {
        var structure = {
            children: [ 
                factory.createSection({ title: 'First Section' }),
                factory.createSection({ title: 'Second Section' }),
            ],
        }

        return {
            structure, 
            // open collapse 
            activeSections:  structure.children.map( (sec) => sec.id ),
        } 
    },
     methods: {
        addSection(val) {

            // console.log('add di ne')
            var data = factory.createSection({ title: 'Random title' });

            this.structure.children.push( data );
            this.activeSections.push( data.id);
        }
    }
}
</script>

<style scoped>

</style>

<style >
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
.el-collapse-item__content {
    background-color: #f1f1f1;
}
</style>