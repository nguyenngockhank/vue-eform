export const TEXT_CONTROL_ATTR = {
    input_type: 'text', 
    label: { text: 'TEXT LABEL' }
}

export const NUMBER_CONTROL_ATTR = {
    is_integer: true,
    precision: 2, // e.g: 22.00
    label: { text: 'NUMBER LABEL' }
}


export const SELECT_CONTROL_ATTR = {
    label: { text: 'SELECT CONTROL' },
    values: [], 
}

export const TEXTAREA_CONTROL_ATTR = {
    label: { text: 'TEXTAREA' },
    rows: 4,
}
