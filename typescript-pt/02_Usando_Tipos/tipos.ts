// STRING
// let nome = 'joao'
let nome: string = 'joao'
console.log(nome)
// Nao pode associar um tipo diferente
// nome=1
nome = '1'
console.log(nome)

// NUMBER
// let idade = 27
let idade: number = 27
idade = 27.5

// BOOLEAN
// let possuiBobbies = false
let possuiBobbies: boolean = false
console.log(possuiBobbies)

// TIPOS EXPLICITOS
// let minhaIdade // se so define, mas nao associa, então será do tipo Any
let minhaIdade: any
minhaIdade = 28
console.log(typeof minhaIdade)
minhaIdade = 'idade é 28'
console.log(typeof minhaIdade)

// ARRAY
let hobbies: any [] = ['cozinhar', 'jogar']
hobbies = [100]

// TUPLA
let endereco: [string, number] = ['Rua 2', 123]
console.log(endereco)
endereco = ['Rua 3', 321]

// ENUM
enum Cor {
  Cinza,
  Verde,
  Azul,
  Laranja = 100,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Vermelho)

// ANY
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2022}
console.log(carro)

// FUNÇÕES
function retornaMeuNome(): string {
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

console.log(multiplicar(2, 3))

// Tipo Função
let funcao
funcao = digaOi
funcao()

funcao = multiplicar
console.log(funcao(2, 2))

let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(4, 5))

// OBJETOS
let usuario: { idade: number; nome: string } = {
  nome: 'joao',
  idade: 28,
}
usuario = {
  idade: 22,
  nome: 'maria',
}

// Desafio

let funcionario: {
  supervisores: string[],
  baterPonto: (a: number) => string
}
funcionario = {
  supervisores: ['Andre', 'Maris'],
  baterPonto: (hora: number): string => hora <= 8 ? 'Ponto Normal' : 'Fora do Horário',
}
console.log(
    funcionario.supervisores,
    funcionario.baterPonto(8),
    funcionario.baterPonto(9),
)

// Criando um Tipo (alias)
type Funcionario = {
  supervisores: string[],
  baterPonto: (a: number) => string
}
let funcionario2: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto: (hora: number): string => hora <= 8 ? 'Ponto Normal' : 'Fora do Horário',
}
console.log(funcionario2.supervisores)

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)
// nota = true

// Checando tipos
let valor
valor = 30
valor = true
if (typeof valor === 'number') {
  console.log('eh um number')
} else {
  console.log(typeof valor)
}

// Tipo NEVER
function falha(msg: string): never {
  throw new Error(msg)
  while (true) {}
}

let produto = {
  nome: 'sabao',
  preco: 1,
  validaProduto() {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa de um nome')
    }
    if (this.preco <= 0) {
      falha('precisa de um Preço')
    }
  },
}
produto.validaProduto()

// NULL
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: null | string
}

let contato1: Contato = {
  nome: 'fulano',
  tel1: '123',
  tel2: '123',
}
let contato2: Contato = {
  nome: 'fulano2',
  tel1: '123',
  tel2: null,
}
console.log(contato2.tel2)