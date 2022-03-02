const express = require('express')

// USE faz o middleware para a rota com inicoo '/api'
express()
  .use('/api', function (req, res, next) {
    console.log('Incio...')
    next()
    console.log('Fim...')
  })
  .use('/api', function (req, res, next) {
    console.log('Resposta...')
    res.send('<h1>API!</h1>')
  })
  .listen(3000, () => console.log('Executando...'))
