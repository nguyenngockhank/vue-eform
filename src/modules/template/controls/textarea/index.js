import TextareaStructure from './TextareaStructure';
import TextareaOptions from './TextareaOptions';
import TEXTAREA_CONTROL_ATTR from './attrs';

export default  {
    structure: {
        label: 'Textarea',
        icon: 'el-icon-picture-outline-round', 
    }, 
    attrs: TEXTAREA_CONTROL_ATTR,
    structureComponent: TextareaStructure,
    optionComponent: TextareaOptions,
}