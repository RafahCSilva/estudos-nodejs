const express = require('express')
const server = express()
const router = require('./ex05_routers')

server.use('/api', router)
// http://localhost:3000/api/produtos/123
// http://localhost:3000/api/clientes/321

server.listen(3000, () => console.log('Executando...'))

