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

import { 
    INPUT_CONTROL, 
    SELECT_CONTROL, 
    TEXTAREA_CONTROL,
    RADIO_GROUP_CONTROL,
} from 'constants/index';

import {
    TEXT_OPTIONS,
    SELECT_OPTIONS,
    TEXTAREA_OPTIONS,
    RADIO_GROUP_OPTIONS,
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