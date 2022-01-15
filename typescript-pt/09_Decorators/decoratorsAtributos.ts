function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[ nomePropriedade ]
  Object.defineProperty(alvo, nomePropriedade, {
    get: function(): any {
      return alvo[ '_' + nomePropriedade ]
    }
    ,
    set: function(valor: any) {
      if (valor < 0) {
        throw new Error('Valor Negativo Proibido')
      }
      alvo[ '_' + nomePropriedade ] = valor
    },
  })
}

class ContaCorrentPositiva {
  @naoNegativo
  public valor: number = 0
}

const ccp = new ContaCorrentPositiva
ccp.valor = 10
console.log(ccp.valor)
ccp.valor = -5
console.log(ccp.valor)
