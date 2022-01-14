"use strict";
// LET & CONST
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(seraQuePode);
// var seraQuePode = '?' // hoisting
// VAR faz a declaração da variavel subir o escopo, assim nao causa erro de variavel nao declarada
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
// if (estaFrio) {
//   var acao = 'Colocar casaco'
// }
// console.log(acao)
if (estaFrio) {
    let acao2 = 'Colocar casaco';
    console.log(acao2);
}
const cpf = '123.123.123-12';
// cpf = '321.321.321-21'
console.log(cpf);
var segredo = 'Externo';
// e scopo de bloco da funcao
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
// escopo de bloco
{
    const def = 'def';
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i) // Cannot find name 'i'.
// Arrow Functions
function somar1(n1, n2) {
    return n1 + n2;
}
const somar2 = function (n1, n2) {
    return n1 + n2;
};
const somar3 = (n1, n2) => {
    return n1 + n2;
};
const somar4 = (n1, n2) => n1 + n2;
console.log(somar1(2, 2), somar2(2, 2), somar3(2, 2), somar4(2, 2));
const saudacao = () => console.log('ola');
saudacao();
const falarCom = (pessoa) => console.log('ola ' + pessoa);
falarCom('joao');
// THIS
// function normalComThis() {
//   let a: any = this
//   console.log(a)
// }
// // normalComThis()
//
// const normalComThisEspecia = normalComThis.bind(2)
// normalComThisEspecia()
//
// console.log(this)
// const arrowComThis = () => {
//   console.log(this)
// }
// arrowComThis()
//
// const arrowComThisEspecia = arrowComThis.bind(2)
// arrowComThisEspecia()
// Parametro padrao
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
}
contagemRegressiva();
contagemRegressiva(5);
// REST & SPREAD
const numeros = [1, 10, 99, -5];
console.log(Math.max(...numeros));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = [...turmaA, 'Fernando', 'Miguel', 'Lorena'];
console.log(turmaB);
function retornaArray(...args) {
    console.log(args);
    return args;
}
console.log(retornaArray(1, 2));
console.log(retornaArray(1, 2, 3, 4, 5));
console.log(retornaArray(...numeros));
// REST & SPREAD (Tupla)
const tubla = [1, 'abc', true];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tubla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tubla);
// DESTRUCTURING (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[ 0 ]
// const ano = caracteristicas[ 1 ]
const [motor, ano] = caracteristicas;
console.log(motor, ano);
const [w, ...z] = [1, 2, 3];
console.log(w, z);
// DESTRUCTURING (objeto)
const item = { nome: 'SSD 480GB', preco: 200, caracteristicas: { w1: 'importado' } };
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem, precoItem);
const { nome: n1, preco, caracteristicas: { w1 } } = item;
console.log(n1, preco, w1);
// TEMPLATE STRING
const usuarioID = 'RaFao';
const notificacoes = '10';
const boasVindas = 'Boas vindas ' + usuarioID + ' Notidicaçoes: ' + notificacoes;
const boasVindas2 = `
Boas vindas ${usuarioID}
Notificaçoes: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}`;
console.log(boasVindas, boasVindas2);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
// PROMISES
// 1- obter resultado assíncrono não é simples
function esperar3s_v1() {
    setTimeout(() => {
        console.log('3s depois 1...');
    }, 3000);
}
const resultado = esperar3s_v1();
console.log(resultado);
// 2. usando callback para executar algo depois
function esperar3s_v2(callback) {
    setTimeout(() => {
        callback('3s depois 2...');
    }, 3000);
}
esperar3s_v2(function (resultado) {
    console.log(resultado);
});
// 3. com Promise
function esperar3s_v3_Promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promise...');
        }, 3000);
    });
}
esperar3s_v3_Promise()
    .then(resultado => {
    console.log(resultado);
});
// Usando promise em requisiçoes e pipelines de tratamentos
const cross_fetch_1 = __importDefault(require("cross-fetch"));
(0, cross_fetch_1.default)('https://swapi.dev/api/people/1')
    // .then((resp: any) => console.log(resp))
    .then((resp) => resp.json())
    // .then((personagem: any) => console.log(personagem))
    .then((personagem) => personagem.films)
    // .then((films: any) => console.log(films))
    .then((films) => (0, cross_fetch_1.default)((films[0])))
    .then((resFilm) => resFilm.json())
    // .then((filme: any) => console.log(filme))
    .then((filme) => console.log(filme.title))
    .catch(err => console.error('Catch... ', err));
//# sourceMappingURL=ecmascript.js.map