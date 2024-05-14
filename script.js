
const btnUsuario = document.getElementById('btn-usuario');
const usuariosContainer = document.getElementById('usuarios-container');
const helperTextUsuario = document.getElementById('helper-text-usuario');


function gerarUsuario(){
    helperTextUsuario.innerText = 'Carregando...'

    fetch('https://random-data-api.com/api/v2/users')
    .then((res) => res.json())
    .then((data) => {
        const usuario = document.createElement('div');
        usuario.innerHTML = `
        <img src="${data.avatar}"/>
        <span><strong>Username</strong> ${data.username}</span>`;

        usuario.classList.add('usuario');
        usuariosContainer.appendChild(usuario)
        helperTextUsuario.innerText = ' '
        console.log(data);
    })
    .catch((error) => {
        helperTextUsuario.innerText = ' '
        alert('Não foi possivel gerar um usuário!!')
        console.log(error)

    })
}



btnUsuario.addEventListener('click', gerarUsuario);


const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const btnPost = document.getElementById('btn-post')
const postContainer = document.getElementById('posts-container')
const helperTextPost = document.getElementById('helper-text-post')

function gerarPost(evento){
    helperTextPost.innerText = ''
    evento.preventDefault()

    const bodyJson = JSON.stringify({
        titulo: postTitle.value,
        mensagem: postBody.value
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST' ,
        headers: {
            "Content-Type": "application/json"

        },
        body: bodyJson 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const post = document.createElement('div')
        post.classList.add('postagem')
        post.innerHTML = `s
        <h3>${data.id} - ${data.titulo}</h3>
        <p>${data.mensagem}</p>
        `
        postContainer.prepend(post)
        postTitle.value = ' '
        postBody.value = ' '
        alert('Postagem Criada com Sucesso!!')
    })
    .catch((error) => {
        console.log(error)
        helperTextPost.innerText = 'Não Foi Possivel Gerar a Postagem !!'
    })
}


btnPost.addEventListener('click', (evento) => gerarPost(evento))

