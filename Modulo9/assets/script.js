let timer

function comecar() {
    timer = setInterval(mostrarHora, 1000);
}

function parar() {
    clearInterval(timer);
}

function mostrarHora() {
    let dia = new Date();
    let hora = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();
    let horaCompleta = `${hora} : ${minutos} : ${segundos}`;

    document.querySelector('.hora').innerHTML = horaCompleta;
}