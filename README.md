# vue-paper



## Data structure 

Data structure is made by `Template Module` and is used by `GUI Module`

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

                    /// controls 
                    children: [ 
                        { 
                            type: 'control', 
                            sub_type: 'text',  


                            label: {
                                /// style
                                bold: false,
                                italic: false,
                                underline: false,
                            }, 

                            options: {
                                is_multiline: false,
                            }
                        }
                    ]
                }
            ],
        }, 


    ], 

}

```


## Component Usage 

Underscore 



[Drag & Drop](https://github.com/SortableJS/Vue.Draggable)

[UI Elements](https://element.eleme.io/#/en-US/component/)