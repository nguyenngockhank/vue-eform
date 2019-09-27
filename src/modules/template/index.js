import { 
    Collapse,
    CollapseItem, 

    Button, 
    Select,
    Option,
    Row,
    Col,
    // dropdown
    Dropdown,
    DropdownMenu,
    DropdownItem,

    // Dialog
    Dialog,

    Divider,

} from 'element-ui';

import draggableComponent from 'vuedraggable';


function register3rdComponents() {
    // register 3rd parties
    Vue.use(Collapse);
    Vue.use(CollapseItem);

    Vue.use(Button);
    
    Vue.use(Select);
    Vue.use(Option);

    // grid 
    // Vue.use(Container);
    Vue.use(Row);
    Vue.use(Col);

    // dropdown
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    
    // dialog
    Vue.use(Dialog);
    Vue.use(Divider);
    

    Vue.component("draggable", draggableComponent);
}



import CoreHandler from './core';
import Main from './components/Main.vue';


/// control options
import TextOptions from '$template/components/control_options/TextOptions';
import SelectOptions from '$template/components/control_options/SelectOptions';
import TextareaOptions from '$template/components/control_options/TextareaOptions';

/// structured control
import TextStructure from '$template/components/control_structures/TextStructure';
import SelectStructure from '$template/components/control_structures/SelectStructure';
import TextareaStructure from '$template/components/control_structures/TextareaStructure';

// This handler to register all built-in Control 
import { 
    TEXT_CONTROL_ATTR, 
    SELECT_CONTROL_ATTR,
    TEXTAREA_CONTROL_ATTR,
} from '$template/constants/controlAttrs';

/*
 *  This function will register built-in controls 
 */
function registerControls() {

    const TEXT_OPTIONS = {
        structure: {
            label: 'Input Control',
            icon: 'el-icon-edit', 
        }, 
        attrs: TEXT_CONTROL_ATTR, 
        structureComponent: TextStructure, 
        optionComponent: TextOptions,  
    };

    const SELECT_OPTIONS = {
        structure: {
            label: 'Select',
            icon: 'el-icon-menu', 
        }, 
        attrs: SELECT_CONTROL_ATTR, 
        structureComponent: SelectStructure,
        optionComponent: SelectOptions,
    }

    const TEXTAREA_OPTIONS = {
        structure: {
            label: 'Textarea',
            icon: 'el-icon-picture-outline-round', 
        }, 
        attrs: TEXTAREA_CONTROL_ATTR,
        structureComponent: TextareaStructure,
        optionComponent: TextareaOptions,
    }

    const CONTROL_OPTIONS = {
        'text': TEXT_OPTIONS,
        'textarea': TEXTAREA_OPTIONS,
        'select': SELECT_OPTIONS,
    }

    CoreHandler.registerControls(CONTROL_OPTIONS);
}


const instance =  {
    install: function (Vue, options) {

        register3rdComponents();

        CoreHandler.init();
        registerControls();


        /// register global component 
        Vue.component('eform-builder', Main);
    }
};


export default instance;