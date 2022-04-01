const db = require('../../config/db')

module.exports = {
  async perfis () {
    return db('perfis')
  },
  async perfil (_, { filtro }) {
    if (!filtro) return null
    if (!!filtro.id) return db('perfis').where({ id: filtro.id }).first()
    if (!!filtro.nome) return db('perfis').where({ nome: filtro.nome }).first()
    return null
  },
}
