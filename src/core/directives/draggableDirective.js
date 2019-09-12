import $ from 'jquery';

export default {
    bind: function (el, binding, vnode) {
        console.log('>>> Set up directive draggable')

        const { value : selector, modifiers } = binding;

        /// apply to its child(ren)
        const options = { 
            scroll: false,
            containment: '',
            zIndex: 9999,
            start: function(event, ui){
                $(ui.helper).css('width', `${ $(event.target).width() }px`);
            }
        };
        // console.log('modifier', modifiers)
        if (modifiers.clone) {
            options.appendTo = 'body';
            options.helper = 'clone';
        }

        if (modifiers.revert) {
            options.revert = true;
        }

        /// apply to itself
        if (!selector) {
            $(el).draggable(options); 
            return;
        }

        // ex: value = ".list-group-item" 
        if (typeof selector === 'string') {
            // this case is a css selector
            $(selector, $(el)).draggable(options);
        }

    }
}

  