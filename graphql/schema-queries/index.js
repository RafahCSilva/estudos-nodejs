const { ApolloServer, gql } = require('apollo-server')

// Essa template string é a definicao do schema
const typeDefs = gql`
  # ponto de entrada da sua API!
  type Query{
    ola: String
    horaAtual: String
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
      return (new Date()).toLocaleString()
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
