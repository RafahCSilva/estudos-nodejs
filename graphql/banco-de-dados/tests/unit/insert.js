const db = require('../config/db')

const novoPerfil = {
  nome: 'cadastador',
  rotulo: 'Cadastador',
}

db('perfis')
  .insert(novoPerfil)
  .then(res => console.log(res))
  .catch(err => console.error(err))
// .finally(() => db.destroy())

db
  .insert({ nome: 'root' + Math.random(), rotulo: 'Super Usuário' })
  .into('perfis')
  .then(res => res[0])
  .then(res => `O codigo gerado foi ${res}`)
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => db.destroy())
