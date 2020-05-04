const { Transform } = require('stream');

const transformStream = new Transform({
  write(chunk, encoding, callback){
    this.push(chunk.toString().toUpperCase())
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)