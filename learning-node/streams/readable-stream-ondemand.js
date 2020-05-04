/**
 * En este ejemplo se puede deducir que cuando empieza
 * el programa se lee el metodo read, y como en el metodo read 
 * se ejecuta el metodo .push el cual hace
 * nuevamente ejecutar el metodo read,
 * entonces por eso es que sigue imprimiendose 
 */

const { Readable} = require('stream')
const readableStream = new Readable({
  read(size) {
    setTimeout(() => {
      console.log('=>', this.currentCharCode);
      if (this.currentCharCode > 90) {
        this.push(null)
        return 
      }
      this.push(String.fromCharCode(this.currentCharCode++))
    }, 100);
  }
})

readableStream.currentCharCode = 65;

readableStream.pipe(process.stdout)