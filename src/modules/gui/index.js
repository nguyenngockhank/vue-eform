import {
    Row,
    Col,
} from 'element-ui';

import Main from './components/Main.vue';


/// use for register controls 
import { registerControl } from './core/index';


import { 
    INPUT_CONTROL, 
    SELECT_CONTROL, 
    TEXTAREA_CONTROL
} from 'constants/index';

import InputControl from './components/controls/InputControl';
import SelectControl from './components/controls/SelectControl';
import Textarea from './components/controls/Textarea';


function registerControls() {
    registerControl(INPUT_CONTROL, InputControl);
    registerControl(SELECT_CONTROL, SelectControl);
    registerControl(TEXTAREA_CONTROL, Textarea);
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