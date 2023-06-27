//Função para fazer a requisição dos posts e colocar no HTML
async function readPosts() {
    //Armazenar na variavel postArea o conteudo da div com classe .posts
    let postArea = document.querySelector('.posts');
    //Trocar o conteudo dessa variavel por "Carregando"
    postArea.innerHTML = 'Carregando...';
    //Fazer a requisição, pedindo para esperar acabar tal requisição, dos posts
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //Transformar em um arquivo JSON
    let json = await response.json();
    //Se o arquivo JSON tiver um tamanho maior que zero, fazer as seguintes coisas:
    if (json.length > 0) {
        //Limpar o "Carregando" que aparece na div class .posts
        postArea.innerHTML = '';
        //Percorrer o array do JSON
        for(let i in json) {
            //Criar e salvar na variavel postHtml o titulo e o body de cada i do JSON
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`;
            //Criar um novo post, limpando todos os anteriores, a cada vez que o laço for feito
            postArea.innerHTML += postHtml;
        }
    } else {
        //Caso o tamanho do array do JSON seja igual o menor que 0 é exibida a mensagem 'Nenhum post para exibir'
        postArea.innerHTML = 'Nenhum post para exibir.'
    }
}



//Iniciar a função 
readPosts();