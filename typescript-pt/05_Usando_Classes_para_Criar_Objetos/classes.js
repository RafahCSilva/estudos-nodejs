"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(1, 4, 1994);
aniversario.dia = 9;
console.log(aniversario);
const casamento = new Data; // posso omitir o "()"
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    // Construtor que faz os atributos serem autodeclaradas
    // IDEA: Converts an unused parameter of a constructor to a parameter property.
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario2 = new DataEsperta(1, 4, 1994);
aniversario2.dia = 9;
console.log(aniversario2);
// DESAFIO Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs.: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.preco} (${this.desconto * 100}% off)`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumoComDesconto() {
        return `${this.nome} custa R$ ${this.precoComDesconto()}`;
    }
}
let produto1 = new Produto('A', 12, 0.1);
console.log(produto1, produto1.resumo(), produto1.resumoComDesconto());
let produto2 = new Produto('B', 25);
console.log(produto2, produto2.resumo(), produto2.resumoComDesconto());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        return this.velocidadeAtual =
            (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima)
                ? novaVelocidade
                : delta > 0
                    ? this.velocidadeMaxima
                    : 0;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const loop = (loops, callback) => Array(loops).fill(0).forEach(callback);
const carro1 = new Carro('Ford', 'Fiesta', 185);
loop(50, () => { carro1.acelerar(); });
console.log(carro1.acelerar());
loop(5, () => { carro1.frear(); });
console.log(carro1.frear());
// HERANÇA (extends)
class Ferrari extends Carro {
    // ReWrite Constructor para ter marcar=Ferrari nesta herança
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
f40.acelerar();
// GETTERS & SETTERS
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor < 0 || valor > 120) {
            console.error('Idade Invalida');
        }
        this._idade = valor;
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// ATRIBUTOS E METODOS ESTATICOS
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4), (new Matematica()).areaCirc(4))
console.log(Matematica.areaCirc(4));
// Classe ABSTRATA
class X {
    w(b) {
        console.log(b);
    }
}
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
        return this;
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
        return this;
    }
}
let calculo1 = new Soma();
console.log(calculo1.executar(2, 3).getResultado());
calculo1 = new Multiplicacao();
console.log(calculo1.executar(2, 3).getResultado());
// SINGLETON
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico();
// const errado = new Unico()
console.log(Unico.getInstance().agora());
// ATRIBUTOS SOMENTE LEITURA
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
//# sourceMappingURL=classes.js.map