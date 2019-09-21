const idGenerator = (prefix = '', id = 0) => ( ) => prefix + (++id);

export default idGenerator;