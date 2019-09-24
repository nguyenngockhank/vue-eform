<template>
<div>
    <div v-if="label.position === 'top'"  key="top-layout" class="form-group">
        <label :style="labelStyle">{{ label.text }}</label>
        <input :placeholder="placeholder" :type="inputType" class="form-control"  />
    </div><!-- end layout for top -->

    <div v-if="label.position === 'left'" key="left-layout" class="form-group row">
        <label :style="labelStyle" class="col-form-label" :class="labelLeftClasses">
            {{ label.text }}
        </label>
        
        <div :class="labelLeftControlWrapperClasses">
            <input :placeholder="placeholder"  :type="inputType" class="form-control"  />
        </div>
    </div><!-- end layout for left -->
</div>
</template>

<script>
import controlMixin from 'mixins/controlMixin';

export default {
    mixins: [ controlMixin ],
    computed: {
        inputType() {
            let { input_type = 'text'  } = this.extra || {};
            return input_type;
        },
    }
}
</script>