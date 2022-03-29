const db = require('../data/db')

module.exports = {
  // um resolver na query `Usuario{}` para mapear um prop
  salario (usuario) { return usuario.salario_real},
  perfil (usuario) {
    return db.perfils.filter((p) => p.id === usuario.perfil_id)[0] || null
  },
}
