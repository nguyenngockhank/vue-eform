import sectionRepo from './repository/SectionRepository';
import rowRepo from './repository/RowRepository';
import controlRepo from './repository/ControlRepository';

import sectionFactory from './factory/SectionFactory';
import rowFactory from './factory/RowFactory';
import controlFactory from './factory/ControlFactory';
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
        return sectionRepo.removeRow(rowId);
    }

    // manipulate of control
    addControl(rowId, attrs) {
        const controlData = rowRepo.addControl(rowId, attrs);
        return controlData;
    }
    
    removeControl(controlId) {
        return rowRepo.removeControl(controlId);
    }

    loadState (state) {
        if ('string' === typeof state) {
            try {
                state = JSON.parse(state);
            } catch (ex) {
                console.warn('[EFORM WARNING]: Invalid Data to Load!');
                return false;
            }
        }
        /// load state 

        // load to repos
        // traverse sections
        let secIndex =0, rowIndex = 0, controlIndex = 0; 

        state.children.forEach( (sectionData) => {
            sectionRepo.set(sectionData.id, sectionData);

            const sIndex = sectionFactory.extractIndexFromId(sectionData.id);
            if (sIndex > secIndex) {
                secIndex = sIndex;
            }

            // traverse rows of section
            sectionData.children.forEach( (rowData) => {
                rowRepo.set(rowData.id, rowData);
                const rIndex = rowFactory.extractIndexFromId(rowData.id);
                if (rIndex > rowIndex) {
                    rowIndex = rIndex;
                }

                // traverse controls of row
                rowData.children.forEach( (controlData) => {
                    controlRepo.set(controlData.id, controlData);
                    const cIndex = controlFactory.extractIndexFromId(controlData.id);
                    if (cIndex > controlIndex) {
                        controlIndex = cIndex;
                    }
                });
            })
        });

        /// reset factory - gererator id index
        sectionFactory.setGeneratorIndex(secIndex);
        rowFactory.setGeneratorIndex(rowIndex);
        controlFactory.setGeneratorIndex(controlIndex);


        /// set to local var 
        this._dataStructure = state;

        return state;
    }

    /// getter for state
    getPageState() {
        return this._dataStructure;
    }

    getSectionState(sectionId) {
        return sectionRepo.find(sectionId);
    }

    getRowState(rowId) {
        return rowRepo.find(rowId);
    }

    getControlState(controlId) {
        return controlRepo.find(controlId);
    }

}


export default new Page; 