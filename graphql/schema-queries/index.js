const { ApolloServer, gql } = require('apollo-server')

// Essa template string é a definicao do schema
const typeDefs = gql`

  # scalar é os tipos, pois somente tem os basicos: Int, Float, String, Boolean e ID
  scalar Date

  # ponto de entrada da sua API!
  type Query{
    ola: String
    horaAtual: Date
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
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Executando na ${url}`)
})
