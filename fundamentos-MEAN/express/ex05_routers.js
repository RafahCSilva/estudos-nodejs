const express = require('express')

const tap = (value, callback) => {
  callback(value)
  return value
}

module.exports = tap(express.Router(), (router) =>
  router
    .use((req, res, next) => {
      const init = Date.now()
      next()
      console.log(`Tempo = ${Date.now() - init} ms.`)
    })
    .get('/produtos/:id', (req, res) => res.json({ id: req.params.id, name: 'Caneta' }))
    .get('/clientes/:id', (req, res) => res.json({ id: req.params.id, name: 'João' }))
    .get('/clientes/:id/:name', (req, res) => res.json({ id: req.params.id, name: req.params.name })),
)
