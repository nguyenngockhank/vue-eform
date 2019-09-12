require('webpack-jquery-ui/draggable');

import draggableDirective from  './core/directives/draggableDirective';

const PREFIX = '';

const instance =  {
    install: function (Vue, options) {
        // TODO: wiil grab prefix in options
        Vue.directive(`${PREFIX}draggable`, draggableDirective)


    }
};


if (typeof window !== undefined) {
    // register global 

    window.VuePaper = instance;

}

export default instance;