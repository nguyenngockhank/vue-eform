export const BASE_ATTR = {
    name: '...',
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
        width: 4, //  1 / 3 
        text: 'LABEL',
        position: 'top', // top, right?
        width: '120px',

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