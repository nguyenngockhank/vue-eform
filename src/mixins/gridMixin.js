export default {
    props: [
        'styles',
    ],
    computed: {
        styleSpan(){
            const  { span: spanStyle }= this.styles;

            if (!spanStyle.responsive) {
                return { span: spanStyle.fixed } ;
            }

            return {
                xl: spanStyle.xl,
                lg: spanStyle.lg,
                md: spanStyle.md,
                sm: spanStyle.sm,
                xs: spanStyle.xs,
            }
        }
    },
}