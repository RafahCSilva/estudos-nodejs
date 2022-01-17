"use strict";
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(key) {
        return this
            .itens
            .filter(i => i.chave === key)
            .at(0);
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (!!encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = new Array();
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
console.log(mapa.obter(5));
//# sourceMappingURL=desafio.js.map