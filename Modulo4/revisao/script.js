class Person {

    cpf = 0;
    passos = 0;

    constructor(nome, idade, genero) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

    darUmPasso() {
        this.passos++;
    }
}



let pessoa1 = new Person("Thiago", 31, "masculino");
let pessoa2 = new Person("Laura", 1, "feminino");
let pessoa3 = new Person("Valentim", 4, "masculino");

pessoa1.darUmPasso();

console.log(`Meu nome é ${pessoa1.nome}, tenho ${pessoa1.idade} anos, meu gênero é ${pessoa1.genero}. Já dei ${pessoa1.passos} passos.`);
console.log(`Sou a ${pessoa2.nome}, filha de ${pessoa1.nome}, tenho ${pessoa2.idade} ano, meu gênero é ${pessoa2.genero}`);
console.log(`Oi! Eu não sou uma pessoa, sou um gato chamado ${pessoa3.nome}. Tenho ${pessoa3.idade} anos e meu gênero é ${pessoa3.genero}.`)