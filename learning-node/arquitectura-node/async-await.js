const promiseFunction = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('hello world')
    } else {
      reject(new Error('Hello error xxx'))
    }
  }, 2000);
});


(async () => {
  try {
    const msg = await promiseFunction();
    console.log(`EL message es ${msg}`);
  } catch (error) {
    console.log('error => ', error);
  }
})(); 
 
// console.log('Hello');