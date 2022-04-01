const db = require('../../config/db')

module.exports = {
  async novoUsuario (_, { dados }) {
    let [id] = await db('usuarios')
      .insert(dados)

    return db('usuarios')
      .where({ id })
      .first()
  },
  async excluirUsuario (_, { filtro }) {
    const usuario = await require('../Query/usuario').usuario(_, { filtro })

    if (!usuario) return null

    await db('usuarios_perfis').where({ 'usuario_id': usuario.id }).delete()
    await db('usuarios').where({ 'id': usuario.id }).delete()

    return usuario
  },
  async alterarUsuario (_, { filtro, dados }) {
    // TODO: Implementar
  },
}
