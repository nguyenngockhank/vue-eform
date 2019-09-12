import * as EV from '../constants/events';
import eventBus from 'core/eventBus';

const instance = {};

const data = {}; 

instance.init = function() {

    eventBus.addListener(EV.ROW_ADDING, function(data) {
        console.log('row adding ...', data)
    });


    eventBus.addListener(EV.SECTION_ADDING, function(data) {
        console.log('section adding ...', data)
    });
}

export default instance;