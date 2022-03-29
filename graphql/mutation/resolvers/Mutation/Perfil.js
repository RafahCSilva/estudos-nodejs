const DB = require('../../data/db')

module.exports = {
  novoPerfil (_, { dados }) {
    const novo = {
      ...dados,
      id: DB.proximoId(),
    }
    DB.perfils.push(novo)
    return novo
  },

  excluirPerfil (_, { filtro }) {
    const index = DB.perfilsWhere(filtro)
    if (index < 0) return null
    return DB.perfils.splice(index, 1)[0] || null
  },

  alterarPerfil (_, { filtro, dados }) {
    const index = DB.perfilsWhere(filtro)
    if (index < 0) return null
    return DB.perfils[index] = {
      ...DB.perfils[index],
      ...dados,
    }
  },
}
