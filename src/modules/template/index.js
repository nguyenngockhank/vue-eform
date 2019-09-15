import { 
    Collapse,
    CollapseItem, 
    Button, 

    // Container,
    Row,
    Col,

    // dropdown
    Dropdown,
    DropdownMenu,
    DropdownItem,
} from 'element-ui';

import draggableComponent from 'vuedraggable';

import { TEXT_CONTROL_ATTR, NUMBER_CONTROL_ATTR } from './constants/control_attrs';

import CoreHandler from './core';


import Main from './components/Main.vue';

const instance =  {
    install: function (Vue, options) {

        // register 3rd parties
        Vue.use(Collapse);
        Vue.use(CollapseItem);
        Vue.use(Button);

        // grid 
        // Vue.use(Container);
        Vue.use(Row);
        Vue.use(Col);

        // dropdown
        Vue.use(Dropdown);
        Vue.use(DropdownMenu);
        Vue.use(DropdownItem);

        Vue.component("draggable", draggableComponent);
        // Vue.directive(`${PREFIX_DIRECTIVE}draggable`, draggableDirective)

        
        CoreHandler.registerControl( 'text', {
            structure: {
                label: 'Text Control',
                icon: 'el-icon-edit', 
            },
            attrs: TEXT_CONTROL_ATTR,
            // sidebar: '',
        })

        CoreHandler.registerControl( 'number', {
            structure: {
                label: 'Number Control',
                icon: 'el-icon-lollipop',
            },
            attrs: NUMBER_CONTROL_ATTR,
            // sidebar: '',
        })




        /// register global component 
        Vue.component('eform-builder', Main);

        /// run  
        CoreHandler.init();
    }
};


export default instance;