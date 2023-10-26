const log = require('./logger');

const sayHello = (name) => {
    console.log(`Hello ${name}`);//global function
}
sayHello('Rohit'); 

//Other global functions
//setTimeout(), clearTimeout(), setInterval(), clearInterval()


var message = '';
console.log(global.message);

console.log(logger);

logger.log('message');

log('message');when a function is directly exported

module.exports = log, exports = log and module.exports.log = log are all equivalent
console.log(__filename);

const path = require('path');
const pathObject = path.parse(__filename);

console.log(pathObject);
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');
//const files = fs.readdirSync('./')
//console.log(files);

fs.readdir('./', function (err, files) { 
    if (err)
        console.log('Error', err);
    else
        console.log('Result', files);
});

const EventEmitter = require('events');
const emitter = new EventEmitter();
//register a listener
emitter.on('messageLogged', () => {
    console.log('Message logged');
})
emitter.emit('messageLogged');

emitter.on('messageLogged', (arg) => {
    console.log('Message logged', arg);
});

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', (arg) => {
    console.log('Message logged', arg);
});

logger.log('Message');
//log('message');
//emitter.emit('messageLogged', {id: 1, url: 'http://'});

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('Connection established....');
});

server.listen(5000);

console.log('Listening on port 5000...')