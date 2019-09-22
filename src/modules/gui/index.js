import {
    Row,
    Col,
} from 'element-ui';

import Main from './components/Main.vue';


/// use for register controls 
import { registerControl } from './core/index';

import TextControl from './components/controls/TextControl';

function registerControls() {
    registerControl('text', TextControl);
}
/// -- end 

const instance =  {
    install: function (Vue, options) {
        Vue.use(Row);
        Vue.use(Col);

        registerControls();

        Vue.component('eform', Main);
    }
}

export default instance;