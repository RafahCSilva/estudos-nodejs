"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ContaCorrent {
    constructor(saldo) { this.saldo = saldo; }
    sacar(valor) {
        if (valor > this.saldo) {
            return false;
        }
        this.saldo -= valor;
        return true;
    }
    getSaldo() { return this.saldo; }
}
__decorate([
    congelar
], ContaCorrent.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrent.prototype, "getSaldo", null);
const cc = new ContaCorrent(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());
// aberto a rewrite de método
// cc.getSaldo = function() {
//   return this[ 'saldo' ] + 7000
// }
// console.log(cc.getSaldo())
// Object.freeze()
function congelar(alvo, nomePropriedade, descriptor) {
    console.log('congelar: ', alvo, nomePropriedade, descriptor);
    descriptor.writable = false;
}
//# sourceMappingURL=decoratorsMetodos.js.map