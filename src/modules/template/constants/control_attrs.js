const BASE_ATTR = {
    name: '...',
    styles: {
        span: {
            xs: 24, 
            sm: 12,
            md: 8, // 3 cols
            lg: 6, // 4 cols
        },  
    },
}

export const TEXT_CONTROL_ATTR = {
    is_multiline: false,
    label: {
        text: 'TEXT LABEL'
    },
    ...BASE_ATTR,
}

