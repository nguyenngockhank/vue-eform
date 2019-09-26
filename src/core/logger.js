import appOptions from '../appOptions';

class Logger {
    
    constructor(name) {
        this.name = String.prototype.toUpperCase.call(name) || 'EFORM';
    }

    _runLog(method, params) {
        if(appOptions.debug) {
            console[method](...params);
        }
        
        // production mode
    }

    i(...params) {
        this.log(...params);
    }

    log(...params) {
        var firstParam = `[😍 ${this.name}]:`;
        this._runLog('log', [ firstParam, ...params]);
    }

    // info(...params) {
    //     var firstParam = `[📘 ${this.name} INFO]: `;
    //     this._runLog('info', [ firstParam, ...params]);
    // }

    warn(...params) {
        var firstParam = `[😱 ${this.name} WARNING]:`
        this._runLog('warn', [ firstParam, ...params]);
    }

    error(...params) {
        var firstParam = `[😡 ${this.name} ERROR]:`
        this._runLog('error', [ firstParam, ...params]);
    }
}

export default Logger;