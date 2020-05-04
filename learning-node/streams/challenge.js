// camel case is challenge

const { Transform } = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(toCamelCase(chunk.toString()))
        callback()
    }

})

function toCamelCase(words) {
  return words.split(' ').map((word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  })
  .join('')
}


process.stdin.pipe(transformStream).pipe(process.stdout)