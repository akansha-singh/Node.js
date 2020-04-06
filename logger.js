const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;
//console.log(uuid.v4());
//console.log(uuid.v4());