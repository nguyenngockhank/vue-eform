import { 
    Collapse,
    CollapseItem, 

    Input,
    InputNumber,
    Checkbox,
    Button, 

    // Container,
    Row,
    Col,

    // dropdown
    Dropdown,
    DropdownMenu,
    DropdownItem,

    // Dialog
    Dialog,

    FormItem,
} from 'element-ui';

import draggableComponent from 'vuedraggable';

import CoreHandler from './core';


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

        Vue.use(FormItem);
        

        Vue.component("draggable", draggableComponent);
        // Vue.directive(`${PREFIX_DIRECTIVE}draggable`, draggableDirective)


        /// run  
        CoreHandler.init();

        /// register global component 
        Vue.component('eform-builder', Main);

        
    }
};


export default instance;