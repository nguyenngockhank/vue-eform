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
    TEXTAREA_CONTROL,
    RADIO_GROUP_CONTROL,
    CHECKBOX_GROUP_CONTROL,
    CHECKBOX_CONTROL,
} from 'constants/index';

import InputControl from './components/controls/InputControl';
import SelectControl from './components/controls/SelectControl';
import Textarea from './components/controls/Textarea';
import RadioGroup from './components/controls/RadioGroup';
import CheckboxGroup from './components/controls/CheckboxGroup';
import Checkbox from './components/controls/Checkbox';


function registerControls() {
    registerControl(INPUT_CONTROL, InputControl);
    registerControl(SELECT_CONTROL, SelectControl);
    registerControl(TEXTAREA_CONTROL, Textarea);
    registerControl(RADIO_GROUP_CONTROL, RadioGroup);
    registerControl(CHECKBOX_GROUP_CONTROL, CheckboxGroup);
    registerControl(CHECKBOX_CONTROL, Checkbox);
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