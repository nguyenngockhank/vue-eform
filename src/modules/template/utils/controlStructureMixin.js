export default {
    props: [ 'extra', 'name', 'label'], 
    computed: {
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

            if (label.position === 'left') {
                result['float'] = 'left';
                result['width'] = label.width;
            }

            return result;
        },
        inputWrapperStyle() {
            const result = { };
            const label = this.label;

            if (label.position === 'left') {
                result['margin-left'] = label.width;
            }

            return result;
        }
    }
}