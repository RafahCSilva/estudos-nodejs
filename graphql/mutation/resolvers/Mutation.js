const DB = require('../data/db')
module.exports = {
  novoUsuario (_, args) {
    if (DB.usuarios.some(u => u.email === args.email)) {
      throw new Error('E-mail já cadastrado')
    }

    const novo = {
      ...args,
      id: DB.proximoId(), perfil_id: 1, status: 'ATIVO',
    }
    DB.usuarios.push(novo)
    return novo
  },

  excluirUsuario (_, { id }) {
    const index = DB.usuarios.findIndex(u => u.id === id)
    if (index < 0) return null
    return DB.usuarios.splice(index, 1)[0] || null
  },

  alterarUsuario (_, args) {
    const index = DB.usuarios.findIndex(u => u.id === args.id)
    if (index < 0) return null
    return DB.usuarios[index] = {
      ...DB.usuarios[index],
      ...args,
    }
    // return DB.usuarios.splice(index, 1, {
    //   ...DB.usuarios[index],
    //   ...args,
    // })[0]
  },
}
