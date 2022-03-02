const express = require('express')
express()
  // http://localhost:3000/
  .get('/', function (req, res) {
    res.send('<h1>Index!</h1>')
  })
  // http://localhost:3000/teste
  .all('/teste', function (req, res) {
    res.send('<h1>Teste!</h1>')
  })
  // http://localhost:3000/api
  // http://localhost:3000/minhaapi
  .get(/api/, function (req, res) {
    // com regexp
    res.send('<h1>API!</h1>')
  })
  .listen(3000, () => console.log('Executando...'))
