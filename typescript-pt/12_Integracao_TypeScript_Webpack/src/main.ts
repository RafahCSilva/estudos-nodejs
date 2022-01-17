import $ from 'jquery'
import Livro from './modelo/livro'

const livro = new Livro('Dom Quixote', 108.80, 0.10)
console.log(livro.precoComDesconto())
$('body')
  .append(`<h1>Nome: ${livro.nome}</h1>`)
  .append(`<h2>Preço: R$ ${livro.precoComDesconto()}</h2>`)

// https://webpack.js.org/guides/typescript/
// https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html#webpack
