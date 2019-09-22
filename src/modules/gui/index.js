import {
    Row,
    Col,
} from 'element-ui';

import Main from './components/Main.vue';

const instance =  {
    install: function (Vue, options) {
        Vue.use(Row);
        Vue.use(Col);

        Vue.component('eform', Main);
    }
}

export default instance;