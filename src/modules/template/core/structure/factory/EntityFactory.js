import generator from 'template/utils/idGenerator';

class EntityFactory {

    constructor(prefix, type) {
        this.type = type;
        this.prefix = prefix;
        this.setGeneratorIndex(0)
    }

    setGeneratorIndex(index) {
        this.generator = generator(this.prefix, index);
    }

    // will be extend
    create(options) {
        let newIns = {
            type: this.type,
            children: [],
        };

        console.log('>> >create witth options ', this.type,  options)
        newIns = Object.assign(newIns, options); // extends attrs 
        newIns.id = this.generator(); // assign id for entity 

        return newIns;
    }

}

export default EntityFactory;