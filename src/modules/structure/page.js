import sectionRepo from './repository/SectionRepository';
import rowRepo from './repository/RowRepository';

class Page {

    constructor() {
        this._dataStructure = {
            children: [],
        }; 
    }

    // manipulate of section
    addSection(payload) {
        const sectionData = sectionRepo.add(payload);
        this._dataStructure.children.push(sectionData);
        return sectionData;
    }

    removeSection(sectionId) {
        // remove from repo 
        sectionRepo.remove(sectionId);
        // remove from data structure 
        this._dataStructure.children = this._dataStructure.children.filter((e) => e.id != sectionId)
    }

    // manipulate of row
    addRow(sectionId) {
        const rowData = sectionRepo.addRow( sectionId );
        return rowData;
    }
 
    removeRow(rowId) {
        return  sectionRepo.removeRow ( rowId);
    }

    /// getter for state
    getPageState() {
        return this._dataStructure;
    }

    getSectionState(sectionId) {
        return sectionRepo.find(sectionId);
    }

}


export default new Page; 