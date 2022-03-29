const { ApolloServer, gql } = require('apollo-server')

const usuarios = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
  },
  {
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
  },
  {
    id: 3,
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
  },
]

const perfils = [
  { id: 1, nome: 'Comum' },
  { id: 2, nome: 'Administrador' },
]

// Essa template string é a definicao do schema
const typeDefs = gql`

  # scalar é os tipos, pois somente tem os basicos: Int, Float, String, Boolean e ID
  scalar Date

  # Uma nova query
  type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
    perfil: Perfil
  }
  type Perfil {
    id: Int!
    nome: String!
  }

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  # ponto de entrada da sua API!
  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario!]
    usuario(id: ID): Usuario
    perfils: [Perfil!]
    perfil(id: Int): Perfil
  }
`

// cada função é um resolver,
// ela q será chamada pelo schema para obter o valor
const resolvers = {
  Query: {
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
      return usuarios
    },
    usuario (_, { id }) {
      return usuarios.filter((u) => u.id == id)[0] || null
    },
    perfils () {
      return perfils
    },
    perfil (_, { id }) {
      return perfils.filter((p) => p.id === id)[0] || null
    },
  },
  Usuario: {
    // um resolver na query `Usuario{}` para mapear um prop
    salario (usuario) { return usuario.salario_real},
    perfil (usuario) {
      return perfils.filter((p) => p.id === usuario.perfil_id)[0] || null
    },
  },
  Produto: {
    precoComDesconto (produto) {
      return produto.preco * (1 - (produto.desconto || 0))
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Executando na ${url}`)
})
