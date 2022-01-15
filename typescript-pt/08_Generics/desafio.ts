// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<K, V> = { chave: K; valor: V }

class Mapa<K, V> {
  private itens: Array<Par<K, V>> = new Array<Par<K, V>>()

  obter(key: K): Par<K, V> | undefined {
    return this
      .itens
      .filter(i => i.chave === key)
      .at(0)
  }
  colocar(par: Par<K, V>): void {
    const encontrado = this.obter(par.chave)
    if (!!encontrado) {
      encontrado.valor = par.valor
    } else {
      this.itens.push(par)
    }
  }
  imprimir(): void {
    console.log(this.itens)
  }
  limpar(): void {
    this.itens = new Array<Par<K, V>>()
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({chave: 1, valor: 'Pedro'})
mapa.colocar({chave: 2, valor: 'Rebeca'})
mapa.colocar({chave: 3, valor: 'Maria'})
mapa.colocar({chave: 1, valor: 'Gustavo'})

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()
console.log(mapa.obter(5))
