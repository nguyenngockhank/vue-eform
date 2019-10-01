<template>
<LabelWrapedStructure v-bind="$props">
<div>
    <div v-for="item in extra.values" :key="domId(item)" 
        class="form-check" :class="formCheckClasses" >
        <!-- <input :id="domId(item)" :name="name" 
                :value="item.value" type="radio" 
                class="form-check-input">
        <label class="form-check-label" :for="domId(item)"  >
            {{ item.label }}
        </label> -->

        <input 
            type="checkbox" 
            :id="domId(item)" 
            :value="item.value"
            v-model="checkedNames"
        >
        <label class="form-check-label" :for="domId(item)">
            {{ item.label }}
        </label>
    </div>
</div>
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from '$template/components/common/LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';

export default {
    components: { LabelWrapedStructure }, 
    mixins: [ controlMixin ],
    computed: {
        formCheckClasses() {
            const { layout } = this.extra;
            return {
                'form-check-inline': layout === 'inline'
            };
        }
    },
    methods: {
        domId(item) {
            return this.name + '_' + item.value;
        },
        
    }
}
</script>