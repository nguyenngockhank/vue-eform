import SelectStructure from './SelectStructure';
import SelectOptions from './SelectOptions';
import CONTROL_ATTR from './attrs';

export default  {
    structure: {
        label: 'Select',
        icon: 'el-icon-menu', 
    }, 
    attrs: CONTROL_ATTR, 
    structureComponent: SelectStructure,
    optionComponent: SelectOptions,
}