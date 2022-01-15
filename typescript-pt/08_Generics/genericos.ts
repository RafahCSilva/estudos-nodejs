function echo(objeto: any) {
  return objeto
}
console.log(echo('joao').length)
console.log(echo(27).length)
console.log(echo({nome: 'joao', idade: 27}))

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
  return objeto
}
console.log(echoMelhorado('joao').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'joao', idade: 27}).nome)

// Generics disponiveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])

type Aluno = {
  nome: string
  idade: number
}
imprimir<Aluno>([
  {nome: 'Fulano', idade: 22},
  {nome: 'Cicrano', idade: 23},
  {nome: 'Beltrano', idade: 24},
])

// Tipo Genérico
const chamarEcho: <T>(Data: T) => T = echoMelhorado
console.log(chamarEcho('Alguma Coisa'))

type Echo = <T>(Data: T) => T
const chamarEcho2: Echo = echoMelhorado
console.log(chamarEcho2<string>('Alguma Coisa'))

// Class com Generics
class OperacaoBinariaANY {
  constructor(
    public operando1: any,
    public operando2: any,
  ) {}
  executar(): any {
    return this.operando1 + this.operando2
  }
}

console.log(new OperacaoBinariaANY('Bom', 'dia').executar())
console.log(new OperacaoBinariaANY(3, 7).executar())
console.log(new OperacaoBinariaANY(3, 'Opa').executar())
console.log(new OperacaoBinariaANY({}, null).executar())

abstract class OperacaoBinaria<T1, T2, R> {
  constructor(
    public operando1: T1,
    public operando2: T2,
  ) {}
  abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(3, 7).executar())

import Data from './Data'

class DiferencaEntreDatas extends OperacaoBinaria<Data, Data, string> {
  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(Math.abs(t1 - t2) / dia)} dias(s)`
  }
  getTime(data: Data): number {
    let {dia, mes, ano} = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

class Fila<T extends number | string> {
  private itens: Array<T>
  constructor(...args: T[]) { this.itens = args }
  entrar(item: T): void { this.itens.push(item) }
  proximo(): T | null {
    if (this.itens.length === 0) {return null}
    const primeiro = this.itens[ 0 ]
    this.itens.splice(0, 1)
    return primeiro
  }
  imprimir() { console.log(this.itens) }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')
fila.imprimir()
fila.entrar('Rafael')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()

// const filaB = new Fila<boolean>(true, false) // Boolean nao deixa
