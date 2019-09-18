<template>
<el-col v-bind="styleSpan" >
    <div class="control-wrapper"   @dblclick="testUpdateState" >
        <span class="control-remove-icon" @click="removeControl"><i class="el-icon-close" /></span>
            
        <!-- DISPLAY COMPONENT -->
        <component v-if="hasComponentDisplay" :is="componentDisplay" v-bind="$data" />
        <div v-if="!hasComponentDisplay" >
            {{ label.text }}
            <el-input disabled="" :placeholder="name" size="mini" ></el-input>
        </div>
      
                

        <!-- {{ id }} - {{ sub_type }} - {{ label.text }} -->
        <!-- {{ styleSpan }} -->
    </div>
</el-col>
</template>

<script>
import eventBus from 'core/eventBus';
import {  CONTROL_REMOVE_REQUEST, UI_OPEN_EDIT_CONTROL_DIALOG } from '$template/constants/events';

import { plainObject } from 'utils/objectHelpers';
import CoreHandler from '$template/core';


export default {
    props: [ 'id', 'sub_type', ],
    data() {
        const controlState = CoreHandler.getControlState(this.$props.id)
        return controlState;
    },
    computed: {
        styleSpan(){
            const spanStyle = this.styles.span;
              // var spanStyle = this.styles.span;
            if (!spanStyle.responsive) {
                return { span: spanStyle.value } ;
            }

            return {
                xl: spanStyle.xl,
                lg: spanStyle.lg,
                md: spanStyle.md,
                sm: spanStyle.sm,
                xs: spanStyle.xs,
            }

            return this.calculateSpan(this.styles.span);
        },
        componentDisplay() {
            return CoreHandler.getControlStructureComponent(this.sub_type);
        },
        hasComponentDisplay() {
            return !!this.componentDisplay;
        }
    },
    methods: {
        removeControl() {
            eventBus.fireEvent(CONTROL_REMOVE_REQUEST, { controlId: this.id });
        },
        testUpdateState() {
            eventBus.fireEvent(UI_OPEN_EDIT_CONTROL_DIALOG, { data: plainObject(this.$data) });
        }
    }
}
</script>

<style scoped>
.control-wrapper {
    position: relative;
    border: 1px solid #aaa;
    background-color: #fff;
    
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
}
.control-remove-icon {
    /* display: none; */
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    top: -2px;
    right: -15px;
}
.control-remove-icon:hover {
    cursor: pointer;
    color: red;
}
.control-wrapper:hover .control-remove-icon {
    display: block;
}


.control-wrapper.active {
    border: 1px solid aqua;
}
</style>