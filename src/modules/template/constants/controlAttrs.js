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
    extra: {}
}

export const TEXT_CONTROL_ATTR = {
    is_multiline: false,
    label: { text: 'TEXT LABEL' }
}

export const NUMBER_CONTROL_ATTR = {
    is_integer: true,
    precision: 2, // e.g: 22.00
    label: { text: 'NUMBER LABEL' }
}

