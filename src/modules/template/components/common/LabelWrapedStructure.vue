<template>
<div>
    <div v-if="label && label.position === 'top'"  key="top-layout" class="form-group">
        <label :style="labelStyle">{{ label.text }}</label>
        
        <template v-if="$slots.top">
            <slot name="top"></slot>
        </template>
        <template v-else>
            <slot></slot>
        </template>
        
    </div><!-- end layout for top -->

    <div v-if="label && label.position === 'left'" key="left-layout" class="form-group row">
        <label :style="labelStyle" class="col-form-label" :class="labelLeftClasses">
            {{ label.text }}
        </label>
        
        <div :class="labelLeftControlWrapperClasses">

            <template v-if="$slots.left">
                <slot name="left"></slot>
            </template>
            <template v-else>
                <slot></slot>
            </template>

        </div>
    </div><!-- end layout for left -->
</div>
</template>

<script>
import controlMixin from 'mixins/controlMixin';

export default {
    mixins: [ controlMixin ],
}
</script>