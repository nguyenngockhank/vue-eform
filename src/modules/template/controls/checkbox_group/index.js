import CONTROL_ATTR from './attrs';
import CheckboxGroupStructure from './CheckboxGroupStructure';
import CheckboxGroupOptions from './CheckboxGroupOptions';

export default  {
    structure: {
        label: 'Checkbox Group',
        icon: 'el-icon-check', 
    }, 
    attrs: CONTROL_ATTR, 
    structureComponent: CheckboxGroupStructure,
    optionComponent: CheckboxGroupOptions,
}