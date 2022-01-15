"use strict";
// Decorator é chamado na DEFINIÇÃO DE CLASSE,
// e não na instanciação
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Eletrodomestico = class Eletrodomestico {
    constructor() { console.log('novo...'); }
};
Eletrodomestico = __decorate([
    logarClasse
], Eletrodomestico);
function logarClasse(construtor) {
    console.log('Sou o decorator', construtor);
}
new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();
// Factory de Decorator - uma decorator q retorna outra decorator
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazia;
}
function decoratorVazia(_) { }
let Eletrodomestico2 = class Eletrodomestico2 {
};
Eletrodomestico2 = __decorate([
    logarClasseSe(false)
], Eletrodomestico2);
// ou retornar a função anonima
function decorator(a, b) {
    return function (construtor) {
        console.log(a + ' ' + b, construtor);
    };
}
// com paramentros complexos
function decorator2(obj) {
    return function (construtor) {
        console.log(obj.a + ' ' + obj.b, construtor);
    };
}
let Eletrodomestico3 = class Eletrodomestico3 {
};
Eletrodomestico3 = __decorate([
    decorator('teste', 123)
], Eletrodomestico3);
let Eletrodomestico4 = class Eletrodomestico4 {
};
Eletrodomestico4 = __decorate([
    decorator2({ a: 'teste' })
], Eletrodomestico4);
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
let Eletrodomestico5 = class Eletrodomestico5 {
    constructor() {
        console.log('Original...');
    }
};
Eletrodomestico5 = __decorate([
    logarObjeto
], Eletrodomestico5);
new Eletrodomestico5;
// INJETANDO MÉTODOS
let Eletrodomestico6 = class Eletrodomestico6 {
};
Eletrodomestico6 = __decorate([
    imprimivel
], Eletrodomestico6);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () { console.log(this); };
}
new Eletrodomestico6().imprimir();
//
// interface Eletrodomestico6 {imprimir?: () => void}
// const eletrodomestico6 = new Eletrodomestico6()
// eletrodomestico6.imprimir && eletrodomestico6.imprimir()
//# sourceMappingURL=decoratorsClasses.js.map