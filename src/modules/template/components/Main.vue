<template>
<div>
    <div class="build-wrapper">
        <div class="toolbar">
            <el-button @click.native="addSection" type="primary" icon="el-icon-plus" > Add Section</el-button>
            <slot name="toolbar"></slot>
        </div>

        <el-collapse v-model="activeSections" >
            <draggable v-model="structure.children" class="structure-wrapper">
                <Section  v-for="section in structure.children"   
                    class="section-wrapper"  v-bind="section" :key="section.id + '_' + version" v-model="section.children" ></Section>
            </draggable>
        </el-collapse>

        <el-button @click.native="addSection" type="primary" icon="el-icon-plus" > Add Section</el-button>
    </div>    


    <el-dialog title="Editting Control" :show-close="false" :visible.sync="dialogEditControl.visible" width="50%"  :before-close="() => false">

        <ControlDialogBody ref="controlDialog" >
            <template v-slot:extra="slotProps">
                <component ref="inputOption" :is="componentInputOptions" v-bind="slotProps" :key="dialogEditControl.type" ></component> 
            </template>
        </ControlDialogBody>

        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogEditControl.visible = false">Cancel</el-button>
            <el-button type="primary" @click="handleSaveControl" >Save</el-button>
        </span>
    </el-dialog>
    
</div>
</template>

<script>
import eventBus from 'core/eventBus';
import { 
    SECTION_ADD_REQUEST,  
    ROW_ADD_REQUEST, 
    CONTROL_UPDATE_REQUEST,
    UI_OPEN_EDIT_CONTROL_DIALOG,

    SECTION_ADDED, 
    SECTION_REMOVED, 
    ROW_ADDED,
    ROW_REMOVED,
    CONTROL_ADDED,
    CONTROL_REMOVED,
    CONTROL_UPDATED,
} from '$template/constants/events';


import Section from './structure/Section';
import ControlDialogBody from './edit_control_modal/ControlDialogBody';
import CoreHandler from '$template/core';
import { Logger } from '$template/utils';
import { plainObject } from 'utils/objectHelpers';

export default {
    components: {
        Section, ControlDialogBody
    },
    props: [ 'value' ],
    data() {

        return {
            structure: CoreHandler.getPageState(), 
            // open collapse 
            activeSections: [],
            version: 1,

            dialogEditControl: {
                visible: false,
                type: 'text'
            }
        } 
    },
    computed: {
        componentInputOptions() {
            return CoreHandler.getControlOptionsComponent(this.dialogEditControl.type);
            // return InputOptions.options[this.dialogEditControl.type];
        },
    },
    mounted() {
        eventBus.addListener(UI_OPEN_EDIT_CONTROL_DIALOG, ({ data }) => {
            Logger.i('Edit Control', data);

            this.dialogEditControl.visible = true;

            // wait for $refs available after dialog show up
            this.$nextTick(() => {
                this.$refs.controlDialog.controlAttrToState( data );
                this.dialogEditControl.type = data.sub_type;
            });
        });

        // emit input & v-model 
        const emitInput = () => { 
            const data = this.getTemplateData();
            this.$emit('input', data) 
        }
        
        eventBus.addListener(SECTION_ADDED, emitInput);
        eventBus.addListener(SECTION_REMOVED, emitInput);
        eventBus.addListener(ROW_ADDED, emitInput);
        eventBus.addListener(ROW_REMOVED, emitInput);
        eventBus.addListener(CONTROL_ADDED, emitInput);
        eventBus.addListener(CONTROL_REMOVED, emitInput);
        eventBus.addListener(CONTROL_UPDATED, emitInput);
    },
    watch: {
        'structure.children': {
            handler(newVal, oldVal) {
                if (!newVal) return;

                const newIds = newVal.map(el => el.id);
                this.activeSections = newIds;
            }
        }, 
        value: {
            handler(newData) {
                if (!newData) {
                    this.loadTemplateData(newData );
                }
            },
           immediate: true
        }
    },
    methods: {
        handleSaveControl() {
            const baseVal = this.$refs.controlDialog.getValue();
            let extraVal = {};
            if (this.$refs.inputOption) {
                extraVal = this.$refs.inputOption.getValue();
            }
            baseVal.extra = extraVal;
            eventBus.fireEvent(CONTROL_UPDATE_REQUEST, { controlId: baseVal.id, data: baseVal })

            this.dialogEditControl.visible = false;
        },
        addSection(title = 'Random title') {
            if ( typeof title != 'string') {
                title = 'Random title';
            }
            eventBus.fireEvent(SECTION_ADD_REQUEST, { title });
        },
        saveTemplate() {
            // save to local 
            CoreHandler.saveTemplate();
        }, 
        getTemplateData(type = 'object') {
            let result = JSON.stringify(this.structure);
            if (type === 'object') {
                return JSON.parse(result);
            } 
            return result;
        },
        loadTemplateData(data) {
            if (!data) {
                console.warn('[VUE EFORM]: Template data is Empty :('); 
                return;
            }

            const objState = CoreHandler.loadTemplate(data);
            this.structure = objState;
            this.$nextTick(() => ++this.version);
        },
    }
}
</script>

<style scoped>
.build-wrapper {
    display: block;
}
.structure-wrapper {
    /* border: 1px solid #ddd; */
    margin: 20px 0;
}
.section-wrapper {
    padding: 0 ;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    margin-top: 10px;
}
</style>

<style >
.mt-10 {
    margin-top: 10px;
}
.mb-10 {
    margin-bottom: 10px;
}

.el-dialog__body {
    padding-top: 0;
    padding-bottom: 0;
}
.el-collapse {
    border-top: none;
    border-bottom: none;
}
.el-collapse-item__header {
    background-color: #f1f1f1;
}
.el-collapse-item__content {
    padding-bottom: 0px;
}
</style>