const db = require('../data/db')

module.exports = {
  perfil (usuario) {
    return db.perfils.filter((p) => p.id === usuario.perfil_id)[0] || null
  },
}
