import BaseLogger from 'core/logger';
import validate from 'validate.js';


validate.options = { format: "detailed" };


/// mute will be true / in production will let it true
const Logger = new BaseLogger('EFORM GUI');


export { Logger, validate };