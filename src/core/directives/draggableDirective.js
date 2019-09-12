import $ from 'jquery';

export default {
    bind: function (el, binding, vnode) {
        console.log('>>> Set up for Component')

        const { value : selector, modifiers } = binding;



        /// apply to itself
        if (!selector) {
            $(el).draggable(); 
            return;
        }

        /// apply to its child(ren)
        const options = { 
            scroll: false,
            containment: '',
            zIndex: 9999,
            start: function(event, ui){
                $(ui.helper).css('width', `${ $(event.target).width() }px`);
            }
        };

        if (modifiers && modifiers.clone) {
            options.appendTo = 'body';
            options.helper = 'clone';
            options.revert = true;
        }

        // ex: value = ".list-group-item" 
        if (typeof selector === 'string') {
            // this case is a css selector
            $(selector, $(el)).draggable(options);
        }

    }
}

  