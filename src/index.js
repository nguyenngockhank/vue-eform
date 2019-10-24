import template from './modules/template/index';
import gui from './modules/gui/index';

// import 'bootstrap/scss/_forms.scss';

import 'styles.scss';


import { VAR_GLOBAL_NAME } from './constants';

const instance =  {
    install: function (Vue, options) {
        // components 
        gui.install(Vue, options);
        template.install(Vue, options);
    }
};


/// ------ helpers 
import LabelWrapedStructure from '$template/components/common/LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';



// register global 
if (typeof window !== undefined) {
    // export helpers for custom control
  
    window[VAR_GLOBAL_NAME] = instance;

    window[VAR_GLOBAL_NAME + 'Utils'] = {
        templates: {
            LabelWrapedStructure
        }, 
        mixins: {
            controlMixin
        }
    }
    
}

export default instance;