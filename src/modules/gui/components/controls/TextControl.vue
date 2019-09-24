<template>
<div>
    <div v-if="label.position === 'top'"  key="top-layout" class="form-group">
        <label :style="labelStyle">{{ label.text }}</label>
        <input v-model="value"  @input="onInput" :placeholder="placeholder" :type="inputType" class="form-control"  />
    </div><!-- end layout for top -->

    <div v-if="label.position === 'left'" key="left-layout" class="form-group row">
        <label :style="labelStyle" class="col-form-label" :class="labelLeftClasses">
            {{ label.text }}
        </label>
        
        <div :class="labelLeftControlWrapperClasses">
            <input v-model="value" @input="onInput" :placeholder="placeholder"  :type="inputType" class="form-control"  />
        </div>
    </div><!-- end layout for left -->
</div>
</template>

<script>
import controlMixin from 'mixins/controlMixin';

export default {
    mixins: [ controlMixin ],
    props: [ 'eformStore' ],
    data() {
        return {
            value: '',
        }
    },
    computed: {
        inputType() {
            let { input_type = 'text'  } = this.extra || {};
            return input_type;
        },
    },
    watch: {
        'eformStore': {
            handler(store) {
                if (store) {
                    this.value  = store[this.name];
                }
            }, 
            immediate: true,
        }
    },
    methods: {
        onInput(e) {
            // update store
            this.eformStore[this.name] = this.value;
        }
    }
}
</script>