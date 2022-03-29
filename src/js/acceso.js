const user = document.querySelector('.entrada-usuario');
const pass = document.querySelector('.entrada-contraseña');

document.addEventListener('DOMContentLoaded',function(){

    let campo = true;
    localStorage.setItem('registro', campo);

    let registro = localStorage.getItem('registro');
    if(registro){
        let notificacion = document.querySelector('.registro');
        let mensaje = document.createElement('P');
        mensaje.textContent = "Registrado correctamente";
        mensaje.classList.add('registro-mensaje');
        notificacion.appendChild(mensaje);
        setTimeout(function(){
            notificacion.removeChild(mensaje);
        }, 1500);
    }
    console.log("Hola");

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
                        bienvenida = false;
                        localStorage.setItem("usuario", response);
                        localStorage.setItem("bienvenida",bienvenida);
                        window.open('menu.html',"_self");
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





