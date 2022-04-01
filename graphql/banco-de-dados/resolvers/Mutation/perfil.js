const db = require('../../config/db')

module.exports = {
  async novoPerfil (_, { dados }) {
    let [id] = await db('perfis')
      .insert(dados)

    return db('perfis')
      .where({ id })
      .first()
  },
  async excluirPerfil (_, { filtro }) {
    const perfil = await require('../Query/perfil').perfil(_, { filtro })

    if (!perfil) return null

    await db('usuarios_perfis').where({ 'perfil_id': perfil.id }).delete()
    await db('perfis').where({ 'id': perfil.id }).delete()

    return perfil
  },
  async alterarPerfil (_, { filtro, dados }) {
    // TODO: Implementar
  },
}
