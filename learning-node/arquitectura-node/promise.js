const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("hello world");
    } else {
      reject(new Error("Hello error"));
    }
  }, 2000);
});


promise
.then((msg) => msg.toUpperCase())
.then((msg) => {
  console.log(`Ha llegado al msg => ${msg}`);
})
.catch(err => console.log(err))


// Las promesas puede retorna un valor o 
let sumar = (a, b) => {
 return new Promise((resolve, reject) => {
   resolve(a+b)
 }) 
}

sumar(4, 6)
.then((valor) => {
  console.log(`La suma es ${valor}`);
  return sumar(7, 9)
})
.then((valor) => {
  console.log('otro valor ', valor);
}) 