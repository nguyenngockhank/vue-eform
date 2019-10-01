<template>
    <div class="eform">
        <Section v-for="sectionData in structureData.children" 
                :key="sectionData.id" v-bind="sectionData" :eformStore="$options.store" :errorStore="$options.errorStore"  />
    </div>
</template>

<script>
import { PageStructure } from "$structure/index";
import { plainObject } from 'utils/objectHelpers';

import { EForm } from '../core';
import { Logger } from '../utils/index';

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
    eform: null,
    store: null, 
    errorStore: null,

    created() {
        this.$options.pageStructure = new PageStructure;
        this.$options.eform = new EForm(this.$options.pageStructure);
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
        emitValueStore() {
            const store = this.$options.store || {};
            this.$emit('input', plainObject(store.__storage__ || {}));
        },
        emitErrorStore() {

        },
        setTemplateData(templateData = {}) {
            const { $options } = this;

            const isOk = $options.pageStructure.loadState(templateData);

            if (!isOk) {
                Logger.warn('setTemplateData fail - cannot loadState of PageStructure');
                return;
            }

            $options.store = $options.eform.createValueStore(this.value, () => this.emitValueStore());
            $options.errorStore = $options.eform.createErrorStore();


            this.structureData =  $options.pageStructure.getPageState();
            // emit first time
            this.emitValueStore();
        }
    }
}
</script>