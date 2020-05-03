const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.url);
  if (req.method === 'POST' && req.url === '/echo') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    .on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      })
      // challenge 2019 ('05-02-2019') 2 may 2019
      body = Buffer.concat(body).toString()
      let fechaNacimiento = new Date(body);
      let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      res.end(`Naciste el dia ${days[fechaNacimiento.getDate()-1]}`)
    })
    
    //res.end('Hello world\n')
  } else {
    res.statusCode = 404;
    res.end()
  }
})
server.listen(8001)
console.log(`Servidor en la ur http://localhost:8001`);