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
                                underline:: false,
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

  /// attrs: this attribute used for applying style for component 
            ///     style:  {
            ///         width: {

            }
            ///     }
            /// 
            
            /// $options: this attribute used for providing info of component

Template will build this structure data 



## Component Usage 

Underscore 

JQuery + JQuery UI for: `Drag & Drop`,  `Sortable`, `Resizable`

Built on top this library [element](https://element.eleme.io/#/en-US/component/)