function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    }).then((json) => {
        alert(json[0].title);
    })
};

document.querySelector('#botao').addEventListener('click', clicou);