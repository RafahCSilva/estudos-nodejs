const DB = require('../data/db')

module.exports = {
  novoUsuario (_, { dados }) {
    if (DB.usuarios.some(u => u.email === dados.email)) {
      throw new Error('E-mail já cadastrado')
    }

    const novo = {
      ...dados,
      id: DB.proximoId(), perfil_id: 1, status: 'ATIVO',
    }
    DB.usuarios.push(novo)
    return novo
  },

  excluirUsuario (_, { filtro }) {
    const index = DB.usuariosWhere(filtro)
    if (index < 0) return null
    return DB.usuarios.splice(index, 1)[0] || null
  },

  alterarUsuario (_, args) {
    const index = DB.usuariosWhere({ id: args.id })
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

  alterarUsuarioDesafio (_, { filtro, dados }) {
    const index = DB.usuariosWhere(filtro)
    if (index < 0) return null
    return DB.usuarios[index] = {
      ...DB.usuarios[index],
      ...dados,
    }
  },
}
