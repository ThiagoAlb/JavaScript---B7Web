/*
let n1 = parseInt(prompt("Digite o número: "));
let n2 = parseInt(prompt("Digite outro número: "));

function calcPorcentagem(n1, n2) {
    return (n2 / n1) * 100;
   
}

let pct = calcPorcentagem(n1, n2);
console.log(`${pct}% de ${n1} é ${n2}`);
*/

/*
let m2 = parseInt(prompt("Qual a metragem do imóvel? "));
let quartos = parseInt(prompt("Quantos quartos tem o imóvel? "));

// Poderia usar switch nesse exercício

function calcularImovel (m2, quartos) {
    metragem = 3000
    if (quartos == 1) {
        return metragem * m2
    } else if (quartos == 2) {
        return metragem * (m2 * 1.2)
    } else if (quartos == 3){
        return metragem * (m2 * 1.5)
    }
}

let preco = calcularImovel (m2, quartos);
console.log(`A casa custa R$ ${preco}`);
*/

/*
let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite sua senha: ");

function validacao(usuario, senha) {
    if ((usuario === "pedro") && (senha === "123")) {
        return true
    } else {
        return false
    }  
}

if (validacao) {
    console.log("Acesso permitido!")
} else {
    console.log("Acesso negado!")
}

*/

/*

// 1
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log('1.' + carros[x]);

//2
console.log('2. Lista com Audi:');
carros[1] = 'Audi';
//carros.splice(1, 1, 'Audi');
console.log(carros);

//3
console.log('2. Lista com Volvo: ');
carros.push("Volvo");
console.log(carros);

//4
console.log("4. Itens no array");
console.log(carros.length);

*/

/*

let personagem = {
    nome: 'Thiago',
    idade: 32,
    sexo: 'masculino',
    carros: [
        {modelo: 'Jeep', cor: 'preto'},
        {modelo: 'Honda', cor: 'cinza'},
    ]
}

console.log(personagem.carros[0].modelo + ' ' + personagem.carros[0].cor );

*/

/*
for (let i = 0; i <= 10; i++) {
    //console.log(i + ' ' + 'x' + ' ' + '1' + '=' + 1 * i)
    console.log(`${i} x 2 = ${2 * i}`)
}
*/

/*
let cores = ['preto', 'branco', 'azul', 'vermelho'];

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
    
}
*/

let fruits = ['Maça', 'Uva', 'Banana'];
for (let x in fruits) {
    console.log(fruits[x])
    x++
}

let i = 1;
while(i <= 100) {
    console.log(i)
    i++
}