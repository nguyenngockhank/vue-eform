require('webpack-jquery-ui/draggable');

import draggableDirective from  '../../core/directives/draggableDirective';

import { PREFIX_DIRECTIVE } from '../../constants';


const instance =  {
    install: function (Vue, options) {
        // TODO: wiil grab prefix in options
        Vue.directive(`${PREFIX_DIRECTIVE}draggable`, draggableDirective)


    }
};


export default instance;