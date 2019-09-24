<template>
    <div class="eform">
        <Section v-for="sectionData in structureData.children" 
                :key="sectionData.id" v-bind="sectionData" :eformStore="$options.store"  />
    </div>
</template>

<script>
import { PageStructure } from "$structure/index";
import { plainObject } from 'utils/objectHelpers';

import Section  from "./Section";

export default {
    components: { Section },
    props: [
        'templateData',
        'value',
    ],
    data() {
        return {
            structureData: { },
        }
    },

    pageStructure: null,
    store: null, 

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
        emitStore() {
            const store = this.$options.store || {};
            this.$emit('input', plainObject(store.__storage__ || {}));
        },

        setTemplateData(templateData) {
            const { $options } = this;

            $options.pageStructure.loadState(templateData);
            $options.store =  $options.pageStructure.createValueStore(() => {
                this.emitStore();
            }, this.value);

            this.structureData =  $options.pageStructure.getPageState();
            this.emitStore();
        }
    }
}
</script>