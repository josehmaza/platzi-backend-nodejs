const asyncCallback = (cb) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "hello world");
    } else {
      cb(new Error("Hello error"));
    }
  }, 2000);
};

asyncCallback((err, message) => {
  if (err) {
    console.log(`erro => ${err}`);
  } else {
    console.log(`message => ${message}`);
  }
});
