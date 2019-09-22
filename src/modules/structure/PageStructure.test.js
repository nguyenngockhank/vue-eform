import PageStructure from './PageStructure';

import { PREFIX_SECTION_ID, PREFIX_ROW_ID, PREFIX_CONTROL_ID} from 'constants/entities';


var assert = require('assert');


const INIT_STATE = {
    children: [
        { id: `${PREFIX_SECTION_ID}2`, type: 'section', children: [] },

        { 
            id: `${PREFIX_SECTION_ID}1`, type: 'section', children: [
                { 
                    id: `${PREFIX_ROW_ID}1`, 
                    sectionId: `${PREFIX_SECTION_ID}1`, 
                    type: 'row', 
                    children: [ 
                        { 
                            id: `${PREFIX_CONTROL_ID}2`, 
                            rowId:  `${PREFIX_ROW_ID}1`, 
                            type: 'control', 
                            sub_type: 'test', 
                            name: 'Control 2'
                        },
                        {
                            id: `${PREFIX_CONTROL_ID}1`, 
                            rowId:  `${PREFIX_ROW_ID}1`, 
                            type: 'control', 
                            sub_type: 'test',  
                        },
                    ] , 
                },
                { 
                    id: `${PREFIX_ROW_ID}2`, 
                    sectionId: `${PREFIX_SECTION_ID}1`, 
                    type: 'row', 
                    children: [ ], 
                }
            ] 
        },
    ]
};

const INIT_SECTION_SIZE = INIT_STATE.children.length;
const INIT_ROW_SIZE_S1 = 2;
const INIT_CONTROL_SIZE_R1 = 2;

const pageStructure = new PageStructure;
pageStructure.loadState(INIT_STATE);



describe('PageStructure',  () => {

    describe('#loadState()',  () => {

        it('check the size of sections after initilzation',  () => {
            const pageState = pageStructure.getPageState();
            assert.equal(pageState.children.length, INIT_SECTION_SIZE);
        });

        it('check the size of rows of Section `S1` after initilzation',  () => {
            const sectionState = pageStructure.getSectionState(`${PREFIX_SECTION_ID}1`);
            assert.equal(sectionState.children.length, INIT_ROW_SIZE_S1);
        });

        it('check the size of controls of Row `R1` after initilzation',  () => {
            const rowState = pageStructure.getRowState(`${PREFIX_ROW_ID}1`);
            assert.equal(rowState.children.length, INIT_CONTROL_SIZE_R1);
        });

        it('check the existence of Control `C1` after initilzation',  () => {
            const controlState = pageStructure.getControlState(`${PREFIX_CONTROL_ID}1`);
            assert.ok(controlState);
        });
        
    });



    describe('#Mutating Section',  () => {

        it( 'add Section',  () => {
            const sectionData = pageStructure.addSection({}); 
            assert.ok(sectionData);

            const sectionState = pageStructure.getSectionState(sectionData.id);
            assert.ok(sectionState);

            const pageState = pageStructure.getPageState();
            assert.equal(pageState.children.length, INIT_SECTION_SIZE + 1);
        });

        it( 'remove Section S2',  () => {
            let result = pageStructure.removeSection(`${PREFIX_SECTION_ID}2`);
            assert.ok(result !== false);
        });

        it( 'remove non-existence Section', () => {
            let result = pageStructure.removeSection(`${PREFIX_SECTION_ID}20000`);
            assert.ok(result === false);
        })
    });



    describe('#Mutating Row',  () => {

        it( 'add Row to S1',  () => {
            const SECTION_ID = `${PREFIX_SECTION_ID}1`;

            const rowData = pageStructure.addRow(SECTION_ID); 
            assert.ok(rowData);
            
            const sectionState = pageStructure.getSectionState(SECTION_ID);
            assert.equal(sectionState.children.length, INIT_ROW_SIZE_S1 + 1);
        });

        it( 'remove Row R2',  () => {
            let result = pageStructure.removeRow(`${PREFIX_ROW_ID}2`);
            assert.ok(result !== false);
        });

        
        it( 'remove non-existence Row', () => {
            let result = pageStructure.removeRow(`${PREFIX_ROW_ID}20000`);
            assert.ok(result === false);
        })
    });


    describe('#Mutating Control',  () => {

        it( 'add Control to R1',  () => {
            const ROW_ID = `${PREFIX_ROW_ID}1`;

            const controlData = pageStructure.addControl(ROW_ID, { sub_type: 'test_control', test_attr: true }); 
            assert.ok(controlData);
            
            const controlState = pageStructure.getControlState(controlData.id);
            assert.ok(controlState.test_attr);

            const rowState = pageStructure.getRowState(ROW_ID);
            assert.equal(rowState.children.length, INIT_CONTROL_SIZE_R1 + 1);
        });

        it( 'remove Control C1',  () => {
            let result = pageStructure.removeControl(`${PREFIX_CONTROL_ID}1`);
            assert.ok(result !== false);
        });

        it( 'remove non-existence Control', () => {
            let result = pageStructure.removeControl(`${PREFIX_CONTROL_ID}20000`);
            assert.ok(result === false);
        })

        it( 'update Control C2',  () => {
            let NEW_ATTRS = { new_attr: true, new_attr2: true,  name: 'Control 1' };
            let controlData = pageStructure.updateControl(`${PREFIX_CONTROL_ID}2`, NEW_ATTRS);

            // check data return 
            assert.ok(controlData);

            // check new attributes of control
            let { new_attr, new_attr2, name } = controlData;
            assert.deepStrictEqual({ new_attr, new_attr2, name } , NEW_ATTRS);
        });
     
    });
});