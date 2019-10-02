import BaseLogger from 'core/logger';
import validate from 'validate.js';


validate.options = { format: "detailed" };


/// mute will be true / in production will let it true
const Logger = new BaseLogger('EFORM GUI');


// create generator for EForm instance
import generator from 'utils/idGenerator';

const eFormIdGenerator = generator('__EFORM_INS__');


export { Logger, validate, eFormIdGenerator };