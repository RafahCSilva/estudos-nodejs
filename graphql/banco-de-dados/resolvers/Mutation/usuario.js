const db = require('../../config/db')

module.exports = {
  async novoUsuario (_, { dados }) {
    let idPerfis = []
    if (!!dados.perfis) {
      for (let p of dados.perfis) {
        const perfil = await require('../Query/perfil').perfil(_, { filtro: p })
        if (!!perfil)
          idPerfis.push(perfil.id)
      }
      delete dados.perfis
    }

    let [id] = await db('usuarios')
      .insert(dados)

    if (!!idPerfis.length) {
      await db('usuarios_perfis')
        .insert(idPerfis
          .map((p) => {
            return {
              usuario_id: id,
              perfil_id: p,
            }
          }),
        )
    }

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
    let usuario = await require('../Query/usuario').usuario(_, { filtro })
    if (!usuario) return null

    let idPerfis = []
    if (!!dados.perfis) {
      for (let p of dados.perfis) {
        const perfil = await require('../Query/perfil').perfil(_, { filtro: p })
        if (!!perfil)
          idPerfis.push(perfil.id)
      }
      delete dados.perfis
    }

    await db('usuarios').where({ 'id': usuario.id }).update(dados)

    if (!!idPerfis.length) {
      await db('usuarios_perfis').where({ usuario_id: usuario.id }).delete()
      await db('usuarios_perfis')
        .insert(idPerfis
          .map((p) => {
            return {
              usuario_id: usuario.id,
              perfil_id: p,
            }
          }),
        )
    }

    usuario = await require('../Query/usuario').usuario(_, { filtro })
    return usuario
  },
}
