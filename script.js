
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
