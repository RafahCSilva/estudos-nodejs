let id = 1

function proximoId () {
  return id++
}

const usuarios = [
  {
    id: proximoId(),
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO',
  },
  {
    id: proximoId(),
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO',
  },
  {
    id: proximoId(),
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO',
  },
]

const perfils = [
  { id: 1, nome: 'Comum' },
  { id: 2, nome: 'Administrador' },
]

function usuariosWhere (filtro) {
  if (!filtro) return -1
  if (!!filtro.id) return usuarios.findIndex(u => u.id === filtro.id)
  if (!!filtro.email) return usuarios.findIndex(u => u.email === filtro.email)
  return -1
}

function perfilsWhere (filtro) {
  if (!filtro) return -1
  if (!!filtro.id) return perfils.findIndex(p => p.id === filtro.id)
  return -1
}

module.exports = { usuarios, perfils, proximoId, usuariosWhere, perfilsWhere }
