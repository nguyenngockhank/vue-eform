export default {
    props: [ 'name', 'label', 'placeholder', 'extra'], 
    computed: {
        // label style
        labelStyle() {
            const label = this.label;
            const result = { };

            if (label.underline) {
                result['text-decoration'] = 'underline';
            }

            if (label.bold) {
                result['font-weight'] = 700;
            }

            if (label.italic) {
                result['font-style'] = 'italic';
            }

            return result;
        },

        // bootstrap helpers
        labelLeftClasses() {
            const label = this.label;

            const bootstrapGridClass = `col-sm-${label.width}`;
            return {
                [bootstrapGridClass]: true
            }
        },
        labelLeftControlWrapperClasses() {
            const label = this.label;

            const grid = 12 - parseInt(label.width);
            const bootstrapGridClass = `col-sm-${grid}`;
            return {
                [bootstrapGridClass]: true
            }
        },
        // end
    }
}