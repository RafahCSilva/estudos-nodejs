const db = require('../../config/db')

module.exports = {
  async perfis (usuario) {
    return db
      .select('perfis.id', 'perfis.nome', 'perfis.rotulo')
      .from('perfis')
      .join('usuarios_perfis', 'usuarios_perfis.perfil_id', '=', 'perfis.id')
      .where({ 'usuarios_perfis.usuario_id': usuario.id })
  },
}
