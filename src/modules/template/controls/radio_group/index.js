import CONTROL_ATTR from './attrs';
import RadioGroupStructure from './RadioGroupStructure';
import RadioGroupOptions from './RadioGroupOptions';

export default  {
    structure: {
        label: 'Radio Group',
        icon: 'el-icon-circle-plus-outline', 
    }, 
    attrs: CONTROL_ATTR, 
    structureComponent: RadioGroupStructure,
    optionComponent: RadioGroupOptions,
}