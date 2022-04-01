const db = require('../../config/db')

module.exports = {
  async usuarios (perfil) {
    return db
      .from('usuarios')
      .join('usuarios_perfis', 'usuarios_perfis.usuario_id', '=', 'usuarios.id')
      .where({ 'usuarios_perfis.perfil_id': perfil.id })
  },
}
