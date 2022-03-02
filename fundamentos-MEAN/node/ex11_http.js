const http = require('http')
const PORTA = 3456 // http://localhost:3456/

http
  .createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Acho que é melhor usar o Express, não?</h1>')

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Acho que é melhor usar o Express, não?</h1>')
  })
  .listen(PORTA, function () {
    console.log(`Escutando a porta ${PORTA}`)
  })
