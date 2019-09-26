import { BASE_ATTR } from '../constants/baseControlAttr';
import { extendDeep, cloneDeep, extend, isEmpty } from 'utils/objectHelpers';
import { Logger } from '$structure/utils/index';

/*
 * Load & build from stored data 
 * - clear repo
 * - build structure (tree) of data
 * - set index for Id Generator of factory 
 * - fill up `sectionId` of row, `rowId` of control
 * - fill up new attributes of Control from BASE_ATT
*/

function traverseState(state, fnProcessSection, fnProcessRow, fnProcessControl) {
    state.children.forEach( (sectionData) => {

        fnProcessSection(sectionData);

        sectionData.children.forEach( (rowData) => {

            fnProcessRow(rowData, sectionData);

            rowData.children.forEach( (controlData) => {
                fnProcessControl(controlData, rowData, sectionData);
            });
        });
    });
}

export default function ( pageStructure, state ) {

    if ('string' === typeof state) {
        try {
            state = JSON.parse(state);
        } catch (ex) {
            Logger.warn('Invalid Data to Load!');
            return false;
        }
    }
    /// load state 

    if (isEmpty(state)) {
        Logger.warn('Invalid Data to Load!');
        return false;
    }


    // reset repos
    pageStructure.sectionRepo.clear();
    pageStructure.rowRepo.clear();
    pageStructure.controlRepo.clear();

    // traverse sections
    let secIndex =0, rowIndex = 0, controlIndex = 0; 

    function processSection(sectionData) {
        // find the biggest index of section
        const sIndex = pageStructure.sectionFactory.extractIndexFromId(sectionData.id);
        if (sIndex > secIndex) {
            secIndex = sIndex;
        }

        // add to repo 
        pageStructure.sectionRepo.set(sectionData.id, sectionData);
    }

    function processRow(rowData, sectionData) {
        // fill up sectionId
        rowData.sectionId = sectionData.id;

        // find the biggest index of row
        const rIndex = pageStructure.rowFactory.extractIndexFromId(rowData.id);
        if (rIndex > rowIndex) {
            rowIndex = rIndex;
        }

        // add to repo 
        pageStructure.rowRepo.set(rowData.id, rowData);
    }


    function processControl(controlData, rowData, sectionData) {
        // fill up rowId
        controlData.rowId = rowData.id;

        // fill up new attributes from BASE_ATTR
        const baseControlData = cloneDeep(BASE_ATTR);
        const newControlData = extendDeep(baseControlData, controlData);
        extend(controlData, newControlData); 

        // find the biggest index of control
        const cIndex = pageStructure.controlFactory.extractIndexFromId(controlData.id);
        if (cIndex > controlIndex) {
            controlIndex = cIndex;
        }

        // add to repo 
        pageStructure.controlRepo.set(controlData.id, controlData);
    }


    traverseState(state, processSection, processRow, processControl)

    /// reset factory - gererator id index
    pageStructure.sectionFactory.setGeneratorIndex(secIndex);
    pageStructure.rowFactory.setGeneratorIndex(rowIndex);
    pageStructure.controlFactory.setGeneratorIndex(controlIndex);

    /// set to local var 
    return state;
}