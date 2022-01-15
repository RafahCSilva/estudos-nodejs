interface Humano {
  nome: string
  idade?: number // optional
  [ prop: string ]: any // attr com nomes dinamicos
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log(`ola ${pessoa.nome}`)
}
function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}

const pessoa: Humano = {
  nome: 'Joao',
  idade: 27,
  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  },
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({nome: 'Jonas', idade: 27, xyz: true, altura: 1.75 })
pessoa.saudar('Skywalker')

// USANDO EM CLASSES
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date

  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// INTERFACE EM FUNÇÕES
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  // return Math.pow(base, exp)
  // return base ** exp
  return Array(exp).fill(base).reduce((t, a) => t * a)
}
console.log(
  3 ** 10,
  Math.pow(3, 10),
  potencia(3, 10),
)

// HERANÇA
interface A {a(): void}

interface B {b(): void}

interface ABC extends A, B {c(): void}

class RealA implements A {
  a(): void { }
}

class RealAB implements A, B {
  a(): void { }
  b(): void { }
}

class RealABC implements ABC {
  a(): void { }
  b(): void { }
  c(): void { }
}

function testeB(b: B): void {b.b()}
testeB(new class implements B {b(): void { console.log('oi B') }})

abstract class AbstractABD implements A, B {
  a(): void { }
  b(): void { }
  abstract d(): void
}

// JS: Interface estender Object
Object.prototype.log = function() {
  console.log(this.toString())
}

interface Object {log(): void} // com essa interface define para o TS que o Object tera método log

const xyz = {nome: 'joao', toString() {return this.nome}}
xyz.log()

const x = 2
const y = 3
const z = 4
console.log(x)
console.log(y)
console.log(z)
x.log()
y.log()
z.log()
