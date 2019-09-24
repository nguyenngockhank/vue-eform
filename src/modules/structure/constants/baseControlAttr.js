export const BASE_ATTR = {
    name: '...',
    placeholder: '',
    styles: {
        span: {
            responsive: false,
            fixed: 12, //  no reponsive - will use this 

            xs: 12, // dont use it for now
            sm: 12,
            md: 12,
            lg: 12, 
            xl: 12, 
        },  
    },
    label: {
        hide: false,
        width: 4, // ( 1 / 3 of control )
        text: 'LABEL',
        position: 'top', // top, right?

        // style
        bold: false,
        underline: false,
        italic: false,
    },
    validate: {
        required: false,
    },
    extra: { }
}