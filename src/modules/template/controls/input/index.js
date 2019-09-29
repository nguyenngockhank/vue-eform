import TEXT_CONTROL_ATTR from './attrs';
import TextStructure from './TextStructure';
import TextOptions from './TextOptions';


const TEXT_OPTIONS = {
    structure: {
        label: 'Input Control',
        icon: 'el-icon-edit', 
    }, 
    attrs: TEXT_CONTROL_ATTR, 
    structureComponent: TextStructure, 
    optionComponent: TextOptions,  
};

export default TEXT_OPTIONS;