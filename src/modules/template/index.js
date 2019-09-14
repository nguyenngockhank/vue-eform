import { 
    Collapse,
    CollapseItem, 
    Button, 
} from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';

import { TEXT_CONTROL_ATTR } from './constants/control_attrs';

import CoreHandler from './core';

// import draggableComponent from 'vuedraggable';
import Main from './components/Main.vue';

const instance =  {
    install: function (Vue, options) {

        // register 3rd parties
        Vue.use(Collapse);
        Vue.use(CollapseItem);
        Vue.use(Button);
        // Vue.component("draggable", draggableComponent);
        // Vue.directive(`${PREFIX_DIRECTIVE}draggable`, draggableDirective)

        
        CoreHandler.registerControl( 'text', {
            structure: {
                pre_icon: 'pencil',
            },
            attrs: TEXT_CONTROL_ATTR,
            sidebar: '',
        })

        /// register global component 
        Vue.component('eform-builder', Main);

        /// run  
        CoreHandler.init();
    }
};


export default instance;