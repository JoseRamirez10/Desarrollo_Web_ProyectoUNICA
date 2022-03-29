

document.addEventListener('DOMContentLoaded', function(){


    let perfil = document.querySelector('.perfil');
    let usuario = localStorage.getItem('usuario');
    let perfil_usuario = document.querySelector('.perfil-usuario');
    perfil_usuario.textContent = usuario;

    perfil.onclick = function(){
        console.log('click');
    }

});