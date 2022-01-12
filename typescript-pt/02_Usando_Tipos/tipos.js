"use strict";
// STRING
// let nome = 'joao'
let nome = 'joao';
console.log(nome);
// Nao pode associar um tipo diferente
// nome=1
nome = '1';
console.log(nome);
// NUMBER
// let idade = 27
let idade = 27;
idade = 27.5;
// BOOLEAN
// let possuiBobbies = false
let possuiBobbies = false;
console.log(possuiBobbies);
// TIPOS EXPLICITOS
// let minhaIdade // se so define, mas nao associa, então será do tipo Any
let minhaIdade;
minhaIdade = 28;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 28';
console.log(typeof minhaIdade);
// ARRAY
let hobbies = ['cozinhar', 'jogar'];
hobbies = [100];
// TUPLA
let endereco = ['Rua 2', 123];
console.log(endereco);
endereco = ['Rua 3', 321];
// ENUM
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 100] = "Laranja";
    Cor[Cor["Amarelo"] = 101] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Vermelho);
// ANY
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2022 };
console.log(carro);
// FUNÇÕES
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
// Tipo Função
let funcao;
funcao = digaOi;
funcao();
funcao = multiplicar;
console.log(funcao(2, 2));
let calculo;
calculo = multiplicar;
console.log(calculo(4, 5));
// OBJETOS
let usuario = {
    nome: 'joao',
    idade: 28,
};
usuario = {
    idade: 22,
    nome: 'maria',
};
// Desafio
let funcionario;
funcionario = {
    supervisores: ['Andre', 'Maris'],
    baterPonto: (hora) => hora <= 8 ? 'Ponto Normal' : 'Fora do Horário',
};
console.log(funcionario.supervisores, funcionario.baterPonto(8), funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: (hora) => hora <= 8 ? 'Ponto Normal' : 'Fora do Horário',
};
console.log(funcionario2.supervisores);
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// nota = true
// Checando tipos
let valor;
valor = 30;
valor = true;
if (typeof valor === 'number') {
    console.log('eh um number');
}
else {
    console.log(typeof valor);
}
// Tipo NEVER
function falha(msg) {
    throw new Error(msg);
    while (true) { }
}
let produto = {
    nome: 'sabao',
    preco: 1,
    validaProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa de um nome');
        }
        if (this.preco <= 0) {
            falha('precisa de um Preço');
        }
    },
};
produto.validaProduto();
// NULL
let alturaOpcional = 12;
alturaOpcional = null;
let contato1 = {
    nome: 'fulano',
    tel1: '123',
    tel2: '123',
};
let contato2 = {
    nome: 'fulano2',
    tel1: '123',
    tel2: null,
};
console.log(contato2.tel2);
//# sourceMappingURL=tipos.js.map