<template>
  <div>
    <h1>Contador (Classe)</h1>
    <h2>{{ valor }}</h2>
    <h3>{{ getParOuImpar() }}</h3>
    <h3>{{ parOuImpar }}</h3>
    <button @click="setValor(1)">+</button>
    <button @click="setValor(-1)">-</button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class ContadorClasse extends Vue {

  // Props
  @Prop(Number) private readonly valorInicial?: number

  // Data
  private valor: number = this.valorInicial || 0

  // Methods
  public setValor(delta: number) {
    this.valor += delta
  }
  public getParOuImpar(): string {
    return this.valor % 2 === 0 ? 'Par' : 'Impar'
  }

  // Propriedade Computada
  public get parOuImpar(): string {
    return this.valor % 2 === 0 ? 'Par' : 'Impar'
  }
}

// export default Component({})(class ContadorClasse extends Vue {
//   private valor: number = 0
//   public setValor(delta: number) { this.valor += delta }
// })
</script>

<style scoped>
div {
  outline: 1px solid blue;
}
</style>
