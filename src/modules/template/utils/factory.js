import generator from './idGenerator';

/// 
let rowIdGenerator = generator('R');
let sectionIdGenerator = generator('S');


/// data was defined here
const instance = {
    _lastRowIndex: 0,     
    _lastSectionIndex: 0,     
};

instance.setLastRowIndex = function(index) {
    rowIdGenerator = generator('R', index + 1);
}

instance.setLastSectionIndex = function(index) {
    sectionIdGenerator = generator('S', index + 1);
}


instance.createRow = function (options) {
    const obj = Object.assign({
        type: "row",
        children: []
    }, options);

    obj.id = rowIdGenerator();

    return obj;
}


// for section 
instance.createSection = function(options = {}) {
    const obj = Object.assign({
        type: "section",
        children: [
            instance.createRow(),
        ]
    }, options);

    obj.id = sectionIdGenerator();

    return obj;
}


export default instance;