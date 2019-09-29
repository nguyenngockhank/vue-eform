import SelectStructure from './SelectStructure';
import SelectOptions from './SelectOptions';
import SELECT_CONTROL_ATTR from './attrs';

export default  {
    structure: {
        label: 'Select',
        icon: 'el-icon-menu', 
    }, 
    attrs: SELECT_CONTROL_ATTR, 
    structureComponent: SelectStructure,
    optionComponent: SelectOptions,
}