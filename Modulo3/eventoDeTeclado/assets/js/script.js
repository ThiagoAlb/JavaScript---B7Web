/*
function apertou() {
    console.log("APERTOU");
}

function segurou() {
    console.log("SEGUROU");
}

function soltou() {
    console.log("Soltou");
}


//Consegue detectar se o usuário apertou alguma tecla e quantas vezes apertou
document.addEventListener('keyup', soltou);
*/

// É passado o parametro e ou event, depois usado para saber qual tecla foi pressionada utilizando .code ou .key
function soltou(e) {
    console.log(e.key);
}