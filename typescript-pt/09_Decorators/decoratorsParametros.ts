function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo ${alvo} Metodo ${nomeMetodo} Param ${indiceParam}`)
}

class ClassParam {
  funcao(@paramInfo a: number, @paramInfo b?: number): void {
    console.log(a, b)
  }
}

new ClassParam().funcao(123)
