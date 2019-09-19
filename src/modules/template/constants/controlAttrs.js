export const BASE_ATTR = {
    name: '...',
    styles: {
        span: {
            responsive: true,
            value: 12,
            xs: 12, 
            sm: 12,
            md: 12,
            lg: 12, 
            xl: 12, 
        },  
    },
    label: {
        text: 'LABEL',
        position: 'top', // top, right?
        width: '120px',
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

