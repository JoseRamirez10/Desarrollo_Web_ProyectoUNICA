
// Cuando el usuario se le da acceso, aparece una imagen de perfil y el nombre de usuario
// Si se le da click a la imagen o al nombre, esta funcion redirife a la pagina de perfil.php
document.addEventListener('DOMContentLoaded', function(){
    let perfil = document.querySelector('.perfil');
    let usuario = localStorage.getItem('usuario');
    let perfil_usuario = document.querySelector('.perfil-usuario');
    perfil_usuario.textContent = usuario;

    perfil.onclick = function(){
        window.open("perfil.php","_self");
    }

});