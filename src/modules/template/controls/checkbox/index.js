import CONTROL_ATTR from './attrs';
import CheckboxStructure from './CheckboxStructure';
// import CheckboxOptions from './CheckboxOptions';

export default  {
    structure: {
        label: 'Checkbox',
        icon: 'el-icon-check', 
    }, 
    attrs: CONTROL_ATTR, 
    structureComponent: CheckboxStructure,
    // optionComponent: CheckboxOptions,
}