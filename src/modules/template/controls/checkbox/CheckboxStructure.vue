<template>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" :id="domId()">
  <label class="form-check-label" :for="domId()" v-html="label.text" />
</div>
</template>

<script>
import controlMixin from 'mixins/controlMixin';

export default {
    mixins: [ controlMixin ],
    methods: {
        domId(item) {
            return this.name;
        },
        
    }
}
</script>