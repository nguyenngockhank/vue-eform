import SectionRepository from './repository/SectionRepository';
import RowRepository from './repository/RowRepository';
import ControlRepository from './repository/ControlRepository';

import SectionFactory from './factory/SectionFactory';
import RowFactory from './factory/RowFactory';
import ControlFactory from './factory/ControlFactory';

import structureStateLoader from './persistent/structureStateLoader';

class PageStructure {

    constructor() {
        this._dataStructure = {
            children: [],
        }; 

        this.sectionFactory = new SectionFactory;
        this.rowFactory = new RowFactory;
        this.controlFactory = new ControlFactory;

        this.sectionRepo = new SectionRepository(this);
        this.rowRepo = new RowRepository(this);
        this.controlRepo = new ControlRepository(this);
    }

    // manipulate of section
    addSection(payload) {
        const sectionData = this.sectionRepo.add(payload);
        this._dataStructure.children.push(sectionData);
        return sectionData;
    }

    removeSection(sectionId) {
        const sectionData = this.sectionRepo.find(sectionId);

        if (!sectionData) {
            return false;
        }

        // remove rows of section from repo 
        // will be removed dependance controls automatically
        sectionData.children.forEach(( rowData ) => {
            this.removeRow(rowData.id)
        });

        // remove from repo 
        this.sectionRepo.remove(sectionId);

        // remove from data structure 
        this._dataStructure.children = this._dataStructure.children.filter((e) => e.id != sectionId)
    }

    // manipulate of row
    addRow(sectionId) {
        const rowData = this.sectionRepo.addRow( sectionId );
        return rowData;
    }
 
    removeRow(rowId) {
        
        const rowData = this.rowRepo.find(rowId);

        if (!rowData) {
            return false;
        }

        // remove controls of rows from repo first
        rowData.children.forEach(( controlData ) => {
            this.removeControl(controlData.id)
        });

        return this.sectionRepo.removeRow(rowId);
    }

    // manipulate of control
    addControl(rowId, attrs) {
        const controlData = this.rowRepo.addControl(rowId, attrs);
        return controlData;
    }
    
    removeControl(controlId) {
        return this.rowRepo.removeControl(controlId);
    }

    updateControl(controlId, attrs) {
        return this.controlRepo.update(controlId, attrs);
    }



    /*
     * Load & build from stored data 
     * - clear repo
     * - build structure (tree) of data
     * - set index for Id Generator of factory 
     * - correct attributes of Control Data
     */
    loadState (state) {
        const newState =  structureStateLoader(this, state);
        if (newState === false) {
            return false;
        }

        this._dataStructure = newState;
        return this._dataStructure;
    }

    /// getter for state
    getPageState() {
        return this._dataStructure;
    }

    getSectionState(sectionId) {
        return this.sectionRepo.find(sectionId);
    }

    getRowState(rowId) {
        return this.rowRepo.find(rowId);
    }

    getControlState(controlId) {
        return this.controlRepo.find(controlId);
    }

}


export default PageStructure; 