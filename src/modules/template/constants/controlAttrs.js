export const BASE_ATTR = {
    name: '...',
    styles: {
        span: {
            responsive: true,
            value: 6,
            xs: 24, 
            sm: 12,
            md: 8, // 3 cols
            lg: 6, // 4 cols
            xl: 4, // 6 cols
        },  
    },
    label: {
        text: 'LABEL',
        position: 'left', // top, right?
        bold: false,
        underline: false,
        italic: false,
    },
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

