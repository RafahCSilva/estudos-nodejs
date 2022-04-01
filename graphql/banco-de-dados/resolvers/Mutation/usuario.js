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
    // TODO: Implementar
  },
  async alterarUsuario (_, { filtro, dados }) {
    // TODO: Implementar
  },
}
