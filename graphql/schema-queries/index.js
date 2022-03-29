const { ApolloServer, gql } = require('apollo-server')

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
  }

  # ponto de entrada da sua API!
  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: Usuario
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
  },
  Usuario: {
    // um resolver na query `Usuario{}` para mapear um prop
    salario (usuario) { return usuario.salario_real},
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Executando na ${url}`)
})
