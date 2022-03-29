const db = require('../data/db')
module.exports = {
  ola () {
    return 'Basta retornar uma string'
  },
  horaAtual () {
    // return (new Date()).toLocaleString()
    return new Date()
  },
  usuarioLogado () {
    return {
      id: 1,
      nome: 'Ana da Web',
      email: 'anadaweb@email.com',
      idade: 23,
      salario_real: 1234.56,
    }
  },
  produtoEmDestaque () {
    return {
      nome: 'Lapis',
      preco: 1.99,
      desconto: 0.1,
    }
  },
  numerosMegaSena () {
    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort((a, b) => a - b)
  },
  usuarios () {
    return db.usuarios
  },
  usuario (_, { id }) {
    return db.usuarios.filter((u) => u.id == id)[0] || null
  },
  perfils () {
    return db.perfils
  },
  perfil (_, { id }) {
    return db.perfils.filter((p) => p.id === id)[0] || null
  },
}
