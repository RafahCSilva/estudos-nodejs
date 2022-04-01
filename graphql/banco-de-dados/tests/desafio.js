const db = require('../config/db')

async function salvarUsuario (nome, email, senha) {
  return db('usuarios')
    .insert({ nome, email, senha })
}

async function salvarPerfil (nome, rotulo) {
  return db('perfis')
    .insert({ nome, rotulo })
}

async function adicionarPerfis (usuario, ...perfis) {
  return db('usuarios_perfis')
    .insert(perfis.map(p => {
      return {
        usuario_id: usuario[0],
        perfil_id: p,
      }
    }))
}

async function executar () {
  // TRUNCATE
  await db('usuarios_perfis').delete()
  await db('perfis').delete()
  await db('usuarios').delete()

  const usuario = await salvarUsuario('Ana', 'ana@empresa.com.br' + Math.random(), '123456')
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
