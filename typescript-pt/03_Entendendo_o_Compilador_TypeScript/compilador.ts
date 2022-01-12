// "noEmitOnError": true, não gerará o JS compilado ao ter erro no TS
let canal: string = 'gaveta'
let inscritos: number = 123
// canal = inscritos
console.log(canal)

// redeclarar variavel no mesmo escopo global
// let nome: string = 'joao' // TS2451: Cannot redeclare block-scoped variable 'nome'.
// nome = 'joao'
// console.log(nome);
// (function() {
//   let nome: string = 'ana'
// })()

// "target": "ES6", é o target da versao do JS

// "noImplicitAny": true, deve sempre dizer exlicitamente o Any ou qlqr tipo
function soma(a: any, b: any) {
  return a + b
}

let qualquerCoisa

// "strictNullChecks": true, verifica se todos os fluxos geram o assign desejado
// "noUnusedLocals": true, "noUnusedParameters": true, para variáveis nao usadas
function sauda(isManha: boolean /*, horas: number*/) {
  /*let a=1*/
  let message: string
  if (isManha) {
    message = 'bom dia'
  } else {
    message = 'bem vindo'
  }
  return message
}

// "outDir": "./", especifica o local de saida do build

// "outFile": "./", para sair tudo em um único arquivo
// nao compativel com  "module": "commonjs", user o  "module": "system",
