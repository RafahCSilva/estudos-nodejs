class ContaCorrent {
  private saldo: number
  constructor(saldo: number) {this.saldo = saldo}
  @congelar sacar(valor: number) {
    if (valor > this.saldo) { return false }
    this.saldo -= valor
    return true
  }
  @congelar
  getSaldo() {return this.saldo}
}

const cc = new ContaCorrent(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())

// aberto a rewrite de método
// cc.getSaldo = function() {
//   return this[ 'saldo' ] + 7000
// }
// console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomePropriedade: string, descriptor: PropertyDescriptor) {
  console.log('congelar: ', alvo, nomePropriedade, descriptor)
  descriptor.writable = false
}
