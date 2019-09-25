## Add built-in control

Before read this, some places will make you confused! Please calm down and think of the solution... 

Don't hesitate to send me a feedback... 

### Step 

- Register at Template Module
    - Prepare stuffs
        - sub_type
        - structure
        - attrs
        - structureComponent
        - optionComponent

- Register at GUI

### Register at Template Module

```javascript
function registerControls() {

    /// .... MORE CODE 

    const SELECT_OPTIONS = {
        structure: {
            label: 'Select',
            icon: 'el-icon-menu', 
        }, 
        attrs: SELECT_CONTROL_ATTR, 
        structureComponent: SelectStructure,
    }

    /// .... MORE CODE 

    const CONTROL_OPTIONS = {
        'text': TEXT_OPTIONS, 
        'select': SELECT_OPTIONS,
    }

    CoreHandler.registerControls(CONTROL_OPTIONS);
}
```

You can find this piece of code at `modules/template/index`

#### sub_type

Of course, you must need a `key` - it's unique in control list... In my code, the holds attribute `sub_type`. Why? 
Read the structure of module.

In the source code above, `text` and `select` is a `sub_type` (key); 

And now will look at more deeply to `SELECT_OPTIONS` 


#### structure
I don't remember why I name it =)) 

This attribute will provide info of control list when you click (+ Add Control) in the toolbar Row.

- `label` must be a string
- `icon` - you can find the usagable at [HERE - LIST ICON](https://element.eleme.io/#/en-US/component/icon)

 







