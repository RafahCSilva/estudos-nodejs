"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo['_' + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Valor Negativo Proibido');
            }
            alvo['_' + nomePropriedade] = valor;
        },
    });
}
class ContaCorrentPositiva {
    constructor() {
        this.valor = 0;
    }
}
__decorate([
    naoNegativo
], ContaCorrentPositiva.prototype, "valor", void 0);
const ccp = new ContaCorrentPositiva;
ccp.valor = 10;
console.log(ccp.valor);
ccp.valor = -5;
console.log(ccp.valor);
//# sourceMappingURL=decoratorsAtributos.js.map