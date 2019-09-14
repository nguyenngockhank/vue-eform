import { 
    Collapse,
    CollapseItem, 
    Button, 
} from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css';

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
        Vue.component('eform-builder', Main);

        CoreHandler.init();

    }
};


export default instance;