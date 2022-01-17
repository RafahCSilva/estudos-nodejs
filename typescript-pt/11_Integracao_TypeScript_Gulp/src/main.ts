import $ from 'jquery'
import Livro from './modelo/livro'

const livro = new Livro('Dom Quixote', 108.80, 0.10)
console.log(livro.precoComDesconto())
$('body')
  .append(`<h1>${livro.nome}</h1>`)
  .append(`<h2>Preço: R$ ${livro.precoComDesconto()}</h2>`)

// https://www.typescriptlang.org/docs/handbook/gulp.html
