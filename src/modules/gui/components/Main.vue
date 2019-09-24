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
        templateData: {
            handler(newData) {
                // first time wait $options.pageStructure ready
                this.$nextTick(() => {
                    this.setTemplateData(newData);
                });
            },
           immediate: true
        }
    },
    methods: {
        setTemplateData(templateData) {
            this.$options.pageStructure.loadState(templateData);
            this.structureData =  this.$options.pageStructure.getPageState();
        }
    }
}
</script>