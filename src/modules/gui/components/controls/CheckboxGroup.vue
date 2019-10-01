<template>
<LabelWrapedStructure v-bind="$props">
<div>
    <div v-for="item in extra.values" :key="domId(item)" 
        class="form-check" :class="formCheckClasses"
    >
        <input type="checkbox" class="form-check-input" 
            :name="name" :value="item.value" 
            :class="inputClasses" :id="domId(item)" 
            v-model="value" @change="onInput"  @blur="onBlur"  
        >
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
import choiceMixin from '$gui/mixins/choiceMixin';

export default {
    mixins: [ controlMixin, guiControlMixin, choiceMixin ],
    components: { LabelWrapedStructure }, 
    created() {
        // force value to array
        this.value = [];
    },
}
</script>