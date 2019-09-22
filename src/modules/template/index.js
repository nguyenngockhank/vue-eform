import { 
    Collapse,
    CollapseItem, 

    Input,
    InputNumber,
    Checkbox,
    Button, 
    Select,
    Option,

    // Container,
    Row,
    Col,

    // dropdown
    Dropdown,
    DropdownMenu,
    DropdownItem,

    // Dialog
    // Dialog,

    FormItem,
} from 'element-ui';

import draggableComponent from 'vuedraggable';

import CoreHandler from './core';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import Main from './components/Main.vue';

const instance =  {
    install: function (Vue, options) {

        // register 3rd parties
        Vue.use(Collapse);
        Vue.use(CollapseItem);

        Vue.use(Button);
        Vue.use(Input);
        Vue.use(InputNumber);
        Vue.use(Checkbox);
        
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
        // Vue.use(Dialog);
        Vue.use(FormItem);

        Vue.component("draggable", draggableComponent);

        /// run  
        CoreHandler.init();

        /// register global component 
        Vue.component('eform-builder', Main);
    }
};


export default instance;