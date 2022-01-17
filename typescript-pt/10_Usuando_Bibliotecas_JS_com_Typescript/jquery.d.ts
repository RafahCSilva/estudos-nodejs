// o arquivo "*.d.ts" é para definição dos seus tipos/interfaces
// nao gera output, mas é usando nas type check do compilador

// Para o caso do jQuery, há dois jeitos:

//  1. Usando o simples DECLARE para definir a tipagem
//    declare const $:any

//  2. Instale o @type dele (https://www.typescriptlang.org/dt/search?search=jquery)
//  nele terá todas as declarações de tudo que há na lib, cmo métodos, estruturas, params e retornos
//    npm i -s @types/jquery
