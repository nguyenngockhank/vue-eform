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

import { forEach, isEmpty } from 'utils/objectHelpers';

import { Logger } from './utils/index';
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

import { 
    INPUT_CONTROL, 
    SELECT_CONTROL, 
    TEXTAREA_CONTROL,
    RADIO_GROUP_CONTROL,
    CHECKBOX_GROUP_CONTROL,
    CHECKBOX_CONTROL,
} from 'constants/index';

import {
    TEXT_OPTIONS,
    SELECT_OPTIONS,
    TEXTAREA_OPTIONS,
    RADIO_GROUP_OPTIONS,
    CHECKBOX_GROUP_OPTIONS,
    CHECKBOX_OPTIONS,
} from './controls'

/*
 *  This function will register built-in controls 
 */
function registerControls() {

    const CONTROL_OPTIONS = {
        [INPUT_CONTROL]: TEXT_OPTIONS,
        [TEXTAREA_CONTROL]: TEXTAREA_OPTIONS,
        [SELECT_CONTROL]: SELECT_OPTIONS,
        [RADIO_GROUP_CONTROL]: RADIO_GROUP_OPTIONS,
        [CHECKBOX_GROUP_CONTROL]: CHECKBOX_GROUP_OPTIONS,
        [CHECKBOX_CONTROL]: CHECKBOX_OPTIONS,
    }

    CoreHandler.registerControls(CONTROL_OPTIONS);
}


function registerCustomControls(controls) {
    const objects = {};

    forEach(controls, ( controlOptions, controlName) => {
        const { template: templateOption = {} } = controlOptions;
        if (isEmpty(templateOption)) {
            return;
        }
        objects[controlName] = templateOption;
    });

    if (!isEmpty(objects)) {
        Logger.i('Register custom controls: ', objects);
        CoreHandler.registerControls(objects);
    }
}


const instance =  {
    install: function (Vue, options) {
        options = options || {};
        
        console.log(".... options ????",Vue, options)
        const { controls = {} } = options;

       
        register3rdComponents();

        CoreHandler.init();

        registerControls();
        if (!isEmpty(controls)) {
            registerCustomControls(controls);
        }

        /// register global component 
        Vue.component('eform-builder', Main);
    }
};


export default instance;