<template>
<LabelWrapedStructure v-bind="$props">
<div>
    <div v-for="item in extra.values" :key="domId(item)" 
        class="form-check" :class="formCheckClasses" 
    >
        <input class="form-check-input" type="checkbox" 
            :id="domId(item)" :class="inputClasses" 
            :name="name" :value="item.value"
            v-model="value" @change="onInput" @blur="onBlur"  
        />
        <label class="form-check-label" :for="domId(item)"  >
            {{ item.label }}
        </label>
    </div>
</div>
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from './LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';
import guiControlMixin from '$gui/mixins/guiControlMixin';

export default {
    mixins: [ controlMixin, guiControlMixin ],
    components: { LabelWrapedStructure }, 
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
            return this.name + '__' + item.value;
        },
    }
}
</script>