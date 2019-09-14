import PageStructure  from './page';

import SectionRepo from './repository/SectionRepository';
// import rowRepository from './repository/RowRepository';

export { 
    PageStructure, 
    SectionRepo, 
};

const instance = { };

const _dataStructure = {
    children: [],
}; 


instance.init = function() {
    initEvent();
}

instance.buildStructure = function() {

}

instance.getState = function() {
    return _dataStructure;
} 

instance.getSectionState = function(sectionId) {
    return sectionRepository.find(sectionId);
}

export default instance;