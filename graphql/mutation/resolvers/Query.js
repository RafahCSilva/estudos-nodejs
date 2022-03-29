const db = require('../data/db')
module.exports = {
  usuarios () {
    return db.usuarios
  },
  usuario (_, { id }) {
    return db.usuarios.filter((u) => u.id == id)[0] || null
  },
  perfils () {
    return db.perfils
  },
  perfil (_, { id }) {
    return db.perfils.filter((p) => p.id === id)[0] || null
  },
}
