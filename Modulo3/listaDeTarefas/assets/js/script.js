//    ****  Elementos  ****

//Vai pegar o input e salvar na variável input. Como só tem um input não precisa especificar
const input = document.querySelector('input')

//Vai pegar o ul e salvar na variável lista. Como só tem uma lista não precisa especificar
const lista = document.querySelector('ul')

//   ****  Funções  ****

function soltarTeclaEnter(e) {   // e será o valor recebido pela função
    if (e.key === 'Enter') {
        //Adicionar elemento Li a lista
        const newLi = document.createElement('li'); //A variável li vai receber a criação de um novo elemento li
        newLi.innerHTML = input.value;//O novo li vai receber o que foi digitado no input
        lista.appendChild(newLi);  //Será colocado o novo Li no fim da lista

        //Limpar o campo de texto
        input.value = '';

    }
}

//   **** Eventos ****
input.addEventListener('keyup', soltarTeclaEnter);