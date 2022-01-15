class Data {
  // Publico por padrao
  dia: number
  public mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(1, 4, 1994)
aniversario.dia = 9
console.log(aniversario)

const casamento = new Data // posso omitir o "()"
casamento.ano = 2017
console.log(casamento)

class DataEsperta {
  // Construtor que faz os atributos serem autodeclaradas
  // IDEA: Converts an unused parameter of a constructor to a parameter property.
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970) {
  }
}

const aniversario2 = new DataEsperta(1, 4, 1994)
aniversario2.dia = 9
console.log(aniversario2)

// DESAFIO Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params
class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0,
  ) {}
  public resumo(): string {
    return `${this.nome} custa R$ ${this.preco} (${this.desconto * 100}% off)`
  }
  precoComDesconto(): number {
    return this.preco * ( 1 - this.desconto )
  }
  public resumoComDesconto(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto()}`
  }
}

let produto1 = new Produto('A', 12, 0.1)
console.log(produto1, produto1.resumo(), produto1.resumoComDesconto())
let produto2 = new Produto('B', 25)
console.log(produto2, produto2.resumo(), produto2.resumoComDesconto())

class Carro {
  private velocidadeAtual: number = 0
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200,
  ) {}
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    return this.velocidadeAtual =
      ( novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima )
        ? novaVelocidade
        : delta > 0
          ? this.velocidadeMaxima
          : 0
  }
  public acelerar(): number {
    return this.alterarVelocidade(5)
  }
  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const loop = (loops: number, callback: () => any) => Array(loops).fill(0).forEach(callback)

const carro1 = new Carro('Ford', 'Fiesta', 185)

loop(50, () => {carro1.acelerar()})
console.log(carro1.acelerar())

loop(5, () => {carro1.frear()})
console.log(carro1.frear())

// HERANÇA (extends)
class Ferrari extends Carro {
  // ReWrite Constructor para ter marcar=Ferrari nesta herança
  constructor(
    modelo: string,
    velocidadeMaxima: number,
  ) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }
  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)
f40.acelerar()

// GETTERS & SETTERS
class Pessoa {
  private _idade: number = 0
  get idade(): number {
    return this._idade
  }
  set idade(valor: number) {
    if (valor < 0 || valor > 120) {
      console.error('Idade Invalida')
    }
    this._idade = valor
  }
}

const pessoa1 = new Pessoa()
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

// ATRIBUTOS E METODOS ESTATICOS
class Matematica {
  static PI: number = 3.1416
  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4), (new Matematica()).areaCirc(4))
console.log(Matematica.areaCirc(4))

// Classe ABSTRATA
abstract class X {
  abstract y(a: number): number
  w(b: number): void {
    console.log(b)
  }
}

abstract class Calculo {
  protected resultado: number = 0
  abstract executar(...numeros: number[]): Multiplicacao
  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): Multiplicacao {
    this.resultado = numeros.reduce((t, a) => t + a)
    return this
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): Multiplicacao {
    this.resultado = numeros.reduce((t, a) => t * a)
    return this
  }
}

let calculo1: Calculo = new Soma()
console.log(calculo1.executar(2, 3).getResultado())
calculo1 = new Multiplicacao()
console.log(calculo1.executar(2, 3).getResultado())

// SINGLETON
class Unico {
  private static instance: Unico = new Unico()
  private constructor() {}
  static getInstance() {
    return Unico.instance
  }
  agora() {
    return new Date
  }
}

// const errado = new Unico()
console.log(Unico.getInstance().agora())

// ATRIBUTOS SOMENTE LEITURA
class Aviao {
  public readonly modelo: string
  constructor(
    modelo: string,
    public readonly prefixo: string,
  ) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'

