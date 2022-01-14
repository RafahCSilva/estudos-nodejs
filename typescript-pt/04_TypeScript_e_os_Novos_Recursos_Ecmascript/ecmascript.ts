// LET & CONST

// console.log(seraQuePode);
// var seraQuePode = '?' // hoisting
// VAR faz a declaração da variavel subir o escopo, assim nao causa erro de variavel nao declarada

let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
// if (estaFrio) {
//   var acao = 'Colocar casaco'
// }
// console.log(acao)

if (estaFrio) {
  let acao2 = 'Colocar casaco'
  console.log(acao2)
}

const cpf: string = '123.123.123-12'
// cpf = '321.321.321-21'
console.log(cpf)

var segredo = 'Externo'

// e scopo de bloco da funcao
function revelar() {
  var segredo = 'interno'
  console.log(segredo)
}

revelar()
console.log(segredo)

// escopo de bloco
{
  const def = 'def'
  console.log(def)
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log(i) // Cannot find name 'i'.

// Arrow Functions
function somar1(n1: number, n2: number): number {
  return n1 + n2
}
const somar2 = function(n1: number, n2: number): number {
  return n1 + n2
}
const somar3 = (n1: number, n2: number): number => {
  return n1 + n2
}
const somar4 = (n1: number, n2: number): number => n1 + n2

console.log(
  somar1(2, 2),
  somar2(2, 2),
  somar3(2, 2),
  somar4(2, 2),
)

const saudacao = () => console.log('ola')
saudacao()
const falarCom = (pessoa: string) => console.log('ola ' + pessoa)
falarCom('joao')

// THIS
// function normalComThis() {
//   let a: any = this
//   console.log(a)
// }
// // normalComThis()
//
// const normalComThisEspecia = normalComThis.bind(2)
// normalComThisEspecia()
//
// console.log(this)
// const arrowComThis = () => {
//   console.log(this)
// }
// arrowComThis()
//
// const arrowComThisEspecia = arrowComThis.bind(2)
// arrowComThisEspecia()

// Parametro padrao
function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5,
): void {
  console.log(inicio)
  while (inicio > fim) {
    inicio--
    console.log(inicio)
  }
}
contagemRegressiva()
contagemRegressiva(5)

// REST & SPREAD
const numeros = [1, 10, 99, -5]
console.log(Math.max(...numeros))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = [...turmaA, 'Fernando', 'Miguel', 'Lorena']
console.log(turmaB)

function retornaArray(...args: number[]): number[ ] {
  console.log(args)
  return args
}
console.log(retornaArray(1, 2))
console.log(retornaArray(1, 2, 3, 4, 5))
console.log(retornaArray(...numeros))

// REST & SPREAD (Tupla)
const tubla: [number, string, boolean] = [1, 'abc', true]
function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam1(...tubla)

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(Array.isArray(params))
  console.log(`2) ${params[ 0 ]} ${params[ 1 ]} ${params[ 2 ]}`)
}
tuplaParam2(...tubla)

// DESTRUCTURING (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[ 0 ]
// const ano = caracteristicas[ 1 ]
const [motor, ano] = caracteristicas
console.log(motor, ano)

const [w, ...z] = [1, 2, 3]
console.log(w, z)

// DESTRUCTURING (objeto)
const item = {nome: 'SSD 480GB', preco: 200, caracteristicas: {w1: 'importado'}}
const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem, precoItem)
const {nome: n1, preco, caracteristicas: {w1}} = item
console.log(n1, preco, w1)

// TEMPLATE STRING
const usuarioID: string = 'RaFao'
const notificacoes: string = '10'
const boasVindas: string = 'Boas vindas ' + usuarioID + ' Notidicaçoes: ' + notificacoes
const boasVindas2: string = `
Boas vindas ${usuarioID}
Notificaçoes: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`
console.log(boasVindas, boasVindas2)
console.log(`${( 1 + 1 ) * 30}`)
console.log(`Motor: ${caracteristicas[ 0 ]}`)

// PROMISES
// 1- obter resultado assíncrono não é simples
function esperar3s_v1() {
  setTimeout(() => {
    console.log('3s depois 1...')
  }, 3000)
}
const resultado = esperar3s_v1()
console.log(resultado)

// 2. usando callback para executar algo depois
function esperar3s_v2(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('3s depois 2...')
  }, 3000)
}
esperar3s_v2(function(resultado) {
  console.log(resultado)
})

// 3. com Promise
function esperar3s_v3_Promise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('3s depois promise...')
    }, 3000)
  })
}

esperar3s_v3_Promise()
  .then(resultado => {
    console.log(resultado)
  })


// Usando promise em requisiçoes e pipelines de tratamentos
import fetch from 'cross-fetch'

fetch('https://swapi.dev/api/people/1')
  // .then((resp: any) => console.log(resp))
  .then((resp: any) => resp.json())

  // .then((personagem: any) => console.log(personagem))
  .then((personagem: any) => personagem.films)

  // .then((films: any) => console.log(films))
  .then((films: any) => fetch(( films[ 0 ] )))
  .then((resFilm: any) => resFilm.json())

  // .then((filme: any) => console.log(filme))
  .then((filme: any) => console.log(filme.title))

  .catch(err => console.error('Catch... ', err))
