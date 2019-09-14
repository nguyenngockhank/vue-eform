
## Data structure 

`Data structure` is made by `Template Module` and is used by `GUI Module`

Structure will be looked like this: 

```javascript

{
    /// sections 
    children: [
        {
            type: 'section', 
            name: 'first_section', // let user input this if not -> index 0, 1, 2

            collapsable:  true,

            /// rows 
            children: [
                {
                    type: 'row',
                    name: '', // system will 

                    /// controls 
                    children: [ 
                        { 
                            type: 'control', 
                            sub_type: 'text',  
                            is_multiline: false,

                            style: {
                                // span: 24  // fixed
                                //// responsive
                                span: {
                                    xs: 24, // 1 cols
                                    sm: 12, // 2 cols
                                    md: 8,  // 3 cols
                                    lg: 6,  // 4 cols
                                    xl: 4,  // 6 cols
                                },
                            }, 

                            label: {
                                text: '...',
                                /// style
                                bold: false,
                                italic: false,
                                underline: false,
                            }, 

                            validation: {
                                max_length: 255,
                            }
                        }, 
                        {
                            type: 'control',
                            sub_type: 'text',  
                            is_integer: true,  
                            style: {
                                span: 8
                            }, 

                            validation: {
                                max: 20,
                                min: '-',
                            }
                        }
                    ]
                }
            ],
        }, 


    ], 

}

```
