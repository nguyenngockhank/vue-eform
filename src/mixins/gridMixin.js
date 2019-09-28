export default {
    props: [
        'styles',
    ],
    computed: {
        styleSpan(){
            const  { span: spanStyle } = this.styles;

            if (!spanStyle.responsive) {
                return { span: +spanStyle.fixed } ;
            }

            return {
                // span: false,
                xl: +spanStyle.xl, // convert to number 
                lg: +spanStyle.lg, // convert to number 
                md: +spanStyle.md, // convert to number 
                sm: +spanStyle.sm, // convert to number 
                // xs: spanStyle.xs,
            }
        }
    },
}