// Decorator é chamado na DEFINIÇÃO DE CLASSE,
// e não na instanciação

@logarClasse
class Eletrodomestico {constructor() {console.log('novo...')}}

function logarClasse(construtor: Function) {
  console.log('Sou o decorator', construtor)
}

new Eletrodomestico()
new Eletrodomestico()
new Eletrodomestico()

// Factory de Decorator - uma decorator q retorna outra decorator
function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazia
}
function decoratorVazia(_: Function) {}

@logarClasseSe(false)
class Eletrodomestico2 {}

// ou retornar a função anonima
function decorator(a: string, b: number) {
  return function(construtor: Function) {
    console.log(a + ' ' + b, construtor)
  }
}

// com paramentros complexos
function decorator2(obj: { a: string, b?: number }) {
  return function(construtor: Function) {
    console.log(obj.a + ' ' + obj.b, construtor)
  }
}

@decorator('teste', 123)
class Eletrodomestico3 {}

@decorator2({a: 'teste'})
class Eletrodomestico4 {}

// Tecnica para trocar para uma herança
type Construtor = { new(...args: any[]): {} }
function logarObjeto(construtor: Construtor) {
  console.log('Carregado...')
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...')
      super(...args)
      console.log('Depois...')
    }
  }
}

@logarObjeto
class Eletrodomestico5 {
  constructor() {
    console.log('Original...')
  }
}

new Eletrodomestico5

// INJETANDO MÉTODOS
@imprimivel
class Eletrodomestico6 {}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function() {console.log(this)}
}

// interface para indicar o método membro
interface Eletrodomestico6 {imprimir: () => void}

new Eletrodomestico6().imprimir()

//
// interface Eletrodomestico6 {imprimir?: () => void}
// const eletrodomestico6 = new Eletrodomestico6()
// eletrodomestico6.imprimir && eletrodomestico6.imprimir()
