<template>
    <div class="eform">
        <Section v-for="sectionData in structureData.children" 
                :key="sectionData.id" v-bind="sectionData" />
    </div>
</template>

<script>
import { PageStructure } from "$structure/index";

import Section  from "./Section";

export default {
    components: { Section },
    props: [
        'templateData',
    ],
    data() {
        return {
            structureData: { },
        }
    },

    pageStructure: null,
    created() {
        this.$options.pageStructure = new PageStructure;
    },

    watch: {
        templateData(newData) {
            if (this.$options.pageStructure) {
                this.$options.pageStructure.loadState(newData);
                this.structureData =  this.$options.pageStructure.getPageState();
            }
        }
    },
    methods: {
        setTemplateData(templateData, render = true) {

        }
    }
}
</script>