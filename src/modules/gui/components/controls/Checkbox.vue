<template>
<div class="form-check">
  <input class="form-check-input" type="checkbox" 
    :name="name" :id="domId()" 
    v-model="value" @change="onInput" @blur="onBlur"  
  >
  <label class="form-check-label" :for="domId()" v-html="label.text" />
</div>
</template>

<script>
import controlMixin from 'mixins/controlMixin';
import guiControlMixin from '$gui/mixins/guiControlMixin';

export default {
    mixins: [ controlMixin, guiControlMixin ],
    methods: {
        domId(item) {
            return this.name + '__';
        },
    }
}
</script>