const EventEmitter = require('events');
//const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';
class Logger extends EventEmitter {//to give the logger class all the properties of EventEmitter
    log = (message) => {
        //Send an http request
        console.log(message);
        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });//'this' references the logger class
    }
}


//module.exports.log = log;used to export objects
//module.exports.url = url;
//module.exports = log;
module.exports = Logger;