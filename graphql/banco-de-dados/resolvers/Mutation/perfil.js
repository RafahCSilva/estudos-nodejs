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
    // TODO: Implementar
  },
  async alterarPerfil (_, { filtro, dados }) {
    // TODO: Implementar
  },
}
