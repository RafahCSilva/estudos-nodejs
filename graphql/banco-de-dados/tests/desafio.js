const db = require('../config/db')

async function salvarUsuario (nome, email, senha) {
  let usuario = await db('usuarios').where({ email }).first()
  let usuario_id

  if (!usuario) { // CREATE
    let [id] = await db('usuarios')
      .insert({ nome, email, senha })
    usuario_id = id
  } else { // UPDATE
    let id = usuario.id
    await db('usuarios')
      .where({ id })
      .update({ nome, email, senha })
    usuario_id = id
  }
  usuario = await db('usuarios').where({ id: usuario_id }).first()
  return usuario
}

async function salvarPerfil (nome, rotulo) {
  let perfil = await db('perfis').where({ nome }).first()

  if (!perfil) { // CREATE
    [nome] = await db('perfis')
      .insert({ nome, rotulo })
  } else { // UPDATE
    await db('perfis')
      .where({ nome })
      .update({ nome, rotulo })
  }
  perfil = await db('perfis').where({ nome }).first()
  return perfil
}

async function adicionarPerfis (usuario, ...perfis) {
  await db('usuarios_perfis')
    .where({ usuario_id: usuario.id })
    .delete()

  return await db('usuarios_perfis')
    .insert(perfis
      .map(p => {
        return {
          usuario_id: usuario.id,
          perfil_id: p.id,
        }
      }))
}

async function executar () {
  // // TRUNCATE
  // await db('usuarios_perfis').delete()
  // await db('perfis').delete()
  // await db('usuarios').delete()

  const usuario = await salvarUsuario('Ana', 'ana@empresa.com.br', '123456')
  const perfilA = await salvarPerfil('rh', 'Pessoal')
  const perfilB = await salvarPerfil('fin', 'Financeiro')

  console.log(usuario)
  console.log(perfilA)
  console.log(perfilB)

  return await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => db.destroy())
