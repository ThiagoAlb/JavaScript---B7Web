
//   ******** Elementos ********
//Seleciona o input
const input = document.querySelector('input');
//Seleciona a ul
const ul = document.querySelector('ul');

//   ******** Funções ********
function enter(e) {
    if (e.code === "Enter") {
        //Cria um novo li para adicionar a ul
        const novoLi = document.createElement('li');
        //Atribui o valor digitado no input ao novo li
        novoLi.innerText = input.value;
        //Cria um novo li
        ul.appendChild(novoLi);
        //Zera o valor atual do input
        input.value = '';
    }   
}

//   ******** Eventos ********
input.addEventListener('keyup', enter)

