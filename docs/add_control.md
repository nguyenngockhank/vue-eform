# Add built-in control

Before read this, some places will make you confused! Please calm down and think of the solution... 

Don't hesitate to send me a feedback... 

## Step 

- Register at Template Module
    - sub_type
    - structure
    - attrs
    - structureComponent
    - optionComponent

- Register at GUI Module
    - controlComponent

## Register at Template Module

You can find this piece of code at `src/modules/template/index`

```javascript
function registerControls() {

    /// .... MORE CODE 

    const TEXTAREA_OPTIONS = {
        structure: {
            label: 'Textarea',
            icon: 'el-icon-picture-outline-round', 
        }, 
        attrs: {
            rows: 4,
        }, 
        structureComponent: TextareaStructure,
        optionComponent: TextareaOptions,
    }

    /// .... MORE CODE 

    const CONTROL_OPTIONS = {
        'textarea': TEXTAREA_OPTIONS, 
        // more controls
    }

    CoreHandler.registerControls(CONTROL_OPTIONS);
}
```


### sub_type

Of course, you must need a `key` - it's unique in control list... In my code, the holds attribute `sub_type`. Why? 
Read the structure of module.

In the source code above, `text` and `select` is a `sub_type` (key); 

And now will look at more deeply to `SELECT_OPTIONS` 


### structure

This attribute will provide info of control list when you click (+ Add Control) in the toolbar Row.

- `label` must be a string
- `icon` - you can find the usagable at [HERE - LIST ICON](https://element.eleme.io/#/en-US/component/icon)

Examples: 

```
 structure: {
    label: 'Textarea',
    icon: 'el-icon-picture-outline-round', 
}, 
```

### attrs

Every control will have some same attributes, you can see it at `src/modules/structure/constants/baseControlAttr.js`

Of course, `attrs` stands for attributes, used for describing features of control. 

Example: Texteara control need `rows` attribute. 

```javascript
{
    rows: 4,
}
```


### structureComponent

`SelectStructure.vue`

```html
<template>
<LabelWrapedStructure v-bind="$props">
    <textarea :placeholder="placeholder" :rows="extra.rows"  class="form-control" ></textarea>
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from './LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';

export default {
    components: { LabelWrapedStructure }, 
    mixins: [ controlMixin ],
}
</script>
```

- `LabelWrapedStructure` is component was built for shaping Control with Label 
- Corresponding to `Label Position`: **left** & **top** that we can use 

```html
<template v-slot:top>
   ... your input display
</template>`

<template v-slot:left>
   ... your input display
</template>`
```

- If no slots of `left` or `top` is defined, slot `default` will be used


### optionComponent

This component for the purpose to edit the `attrs` we defined above.  


```html
<template>
<div>    
    <el-divider content-position="left"><h3><i class="el-icon-star-on" />  Textarea Options</h3></el-divider>

    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
            <input type="number" v-model="options.rows" class="form-control">
        </div>
    </div>

</div>
</template>

<script>
import optionMixin from '$template/mixins/controlOptionMixin';

export default {
    mixins: [ optionMixin ],
}
</script>
```

In this case, we build input to update `rows` attributes and bind to `options.rows`

Yes, the magic is behind the `$template/mixins/controlOptionMixin`. 


## Register at GUI Module

The very first thing, Register at GUI Module is more easy <3

Just define more controls at `registerControls` at `src/modules/gui/index`

```javascript
import { registerControl } from './core/index';
import Textarea from './components/controls/Textarea.vue';

function registerControls() {
    /// more controls .... 
    registerControl('textarea', Textarea);
}

```


### controlComponent

Here I have the source code of `controls/Textarea.vue`

```html
<template>
<LabelWrapedStructure v-bind="$props">
    <textarea :placeholder="placeholder" v-model="value" @input="onInput" :rows="extra.rows"  class="form-control" ></textarea>
</LabelWrapedStructure>
</template>

<script>
import LabelWrapedStructure from './LabelWrapedStructure';
import controlMixin from 'mixins/controlMixin';
import guiControlMixin from '$gui/mixins/guiControlMixin';

export default {
    mixins: [ controlMixin, guiControlMixin ],
    components: { LabelWrapedStructure },
}
</script>
```

Yeah, It looks 99% similar to `structureComponent` at Template module.  But here are the differences: 
- At script, more mixin: `guiControlMixin`  Yeah that means more logic behind.
- At template, we have `v-model="value"` to mapped local state 
- And `@input="onInput"` to notify to the store, this input value has been changed. 




