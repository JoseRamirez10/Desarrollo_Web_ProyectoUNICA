const user = document.querySelector('.entrada-usuario');
const pass = document.querySelector('.entrada-contraseña');

document.addEventListener('DOMContentLoaded',function(){
    $('#form1').submit(function(e){
        if(validar(e)){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "src/php/validarUsuario.php",
                data:$(this).serialize(),
                success: function(response){
                    if(response == "Usuario no existe"){
                        usuarioInexistente();
                    }else if(response == "Contraseña incorrecta"){
                        contraseñaIncorrecta();
                    }else{
                        window.open('menu.php',"_self");
                    }
                }
            });
        }
    });
});

function validar(event){
    usuario = document.querySelector('.entrada-usuario').value;
    contraseña = document.querySelector('.entrada-contraseña').value;
    if(usuario.length == 0 || contraseña.length == 0){
        alert('Ingrese un nombre de usuario y/o contraseña');
        event.preventDefault();
        return false;
    }
    return true;
}

function usuarioInexistente(){
    let  usuario = document.querySelector(".usuario");
    let aviso = document.createElement('P');
    aviso.textContent = " * El usuario no existe";
    aviso.classList.add('usuario-error');
    usuario.appendChild(aviso);
}

user.onclick = function(){
    const usuario = document.querySelector(".usuario");
    let aviso = document.querySelector(".usuario-error");
    if(aviso){
        usuario.removeChild(aviso);
    }
}

function contraseñaIncorrecta(){
    let  contraseña = document.querySelector(".contraseña");
    let aviso = document.createElement('P');
    aviso.textContent = " * Contraseña incorrecta";
    aviso.classList.add('contraseña-error');
    contraseña.appendChild(aviso);
}

pass.onclick = function(){
    const contraseña = document.querySelector(".contraseña");
    let aviso = document.querySelector(".contraseña-error");
    if(aviso){
        contraseña.removeChild(aviso);
    }
}





