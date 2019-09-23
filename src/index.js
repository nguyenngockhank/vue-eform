import template from './modules/template/index';
import gui from './modules/gui/index';

// import 'bootstrap/scss/_forms.scss';

import 'styles.scss';


import { VAR_GLOBAL_NAME } from './constants';

const instance =  {
    install: function (...params) {
        gui.install(...params);
        template.install(...params);
    }
};


// register global 
if (typeof window !== undefined) {
    window[VAR_GLOBAL_NAME] = instance;
}

export default instance;