"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function echo(objeto) {
    return objeto;
}
console.log(echo('joao').length);
console.log(echo(27).length);
console.log(echo({ nome: 'joao', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('joao').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'joao', idade: 27 }).nome);
// Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
]);
// Tipo Genérico
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma Coisa'));
const chamarEcho2 = echoMelhorado;
console.log(chamarEcho2('Alguma Coisa'));
// Class com Generics
class OperacaoBinariaANY {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinariaANY('Bom', 'dia').executar());
console.log(new OperacaoBinariaANY(3, 7).executar());
console.log(new OperacaoBinariaANY(3, 'Opa').executar());
console.log(new OperacaoBinariaANY({}, null).executar());
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 7).executar());
const Data_1 = __importDefault(require("./Data"));
class DiferencaEntreDatas extends OperacaoBinaria {
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(Math.abs(t1 - t2) / dia)} dias(s)`;
    }
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
}
const d1 = new Data_1.default(1, 2, 2020);
const d2 = new Data_1.default(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
class Fila {
    constructor(...args) { this.itens = args; }
    entrar(item) { this.itens.push(item); }
    proximo() {
        if (this.itens.length === 0) {
            return null;
        }
        const primeiro = this.itens[0];
        this.itens.splice(0, 1);
        return primeiro;
    }
    imprimir() { console.log(this.itens); }
}
const fila = new Fila('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
// const filaB = new Fila<boolean>(true, false) // Boolean nao deixa
//# sourceMappingURL=genericos.js.map