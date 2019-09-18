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

            return result;
        }
    }
}