const EventEmitter = require('events')

class Logger extends EventEmitter {
  execute(cb){
    console.log('Before');
    this.emit('start')
    cb();
    this.emit('end')
    console.log('After');
  }
}

const logger = new Logger();
logger.on('start', () => {
  console.log('STARTING');
})

logger.on('end', () => {
  console.log('FINSIHING');
})


logger.on('end', () => {
  console.log('Its DONE');
})

logger.execute(() => {
  setTimeout(() => {
    console.log('Hello world');
  }, 500);
})

