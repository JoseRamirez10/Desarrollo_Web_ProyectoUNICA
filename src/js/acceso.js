const user = document.querySelector('.entrada-usuario'); // Campo de entrada del usuario
const pass = document.querySelector('.entrada-contraseña'); // Campo de entrada de la contraseña

document.addEventListener('DOMContentLoaded',function(){

    let registro = localStorage.getItem('registro'); // Carga del localStorage la variable regitro
    if(registro == "true"){ // Si se ha hecho un registro antes de abrir la pagina index.php
        let notificacion = document.querySelector('.registro'); // Crea una notifiacion de registro exitoso
        let mensaje = document.createElement('P');
        mensaje.textContent = "Registrado correctamente";
        mensaje.classList.add('registro-mensaje');
        notificacion.appendChild(mensaje);
        setTimeout(function(){ // Despues de 1 segundo y medio desaparece la notificacion
            notificacion.removeChild(mensaje);
        }, 1500);
        registro = false;
        localStorage.setItem('registro', registro);
        // Guarda en el localStorage que ya se valido la notificacion del registro
    }

    // Cuando se hace submit en el formulario de index.php
    // Envia la informacion del formulario al archivo "validarUsuario.php"
    // para validar la informacion del usuario
    $('#form1').submit(function(e){
        if(validar(e)){ // Valida que los campos no esten vacios
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "src/php/validarUsuario.php",
                data:$(this).serialize(), 
                success: function(response){
                    if(response == "Usuario no existe"){
                        usuarioInexistente(); // Si php regresa que el usuario no existe
                    }else if(response == "Contraseña incorrecta"){
                        contraseñaIncorrecta(); // si php regresa que la contraseña es incorrecta
                    }else{
                        // Si el usuario es validado se crea una variable en el localStorage
                        // para generar un mensaje de bienvenida
                        bienvenida = false;
                        localStorage.setItem("usuario", response);
                        localStorage.setItem("bienvenida",bienvenida);
                        window.open('menu.html',"_self"); // Redirecciona a menu.html en la misma ventana
                    }
                }
            });
        }
    });
});

function validar(event){
    // Selecciona los campos de usuario y contraseña del formulario
    // y valida si no estan vacios
    usuario = document.querySelector('.entrada-usuario').value;
    contraseña = document.querySelector('.entrada-contraseña').value;
    if(usuario.length == 0 || contraseña.length == 0){
        alert('Ingrese un nombre de usuario y/o contraseña'); // Si estan vacios manda un alert
        event.preventDefault();
        return false;
    }
    return true;
}

// Si el usuario no existe crea una notificacion para indicar que el usuario no existe
function usuarioInexistente(){
    let  usuario = document.querySelector(".usuario");
    let aviso = document.createElement('P');
    aviso.textContent = " * El usuario no existe";
    aviso.classList.add('usuario-error');
    usuario.appendChild(aviso);
}

// Cuando el usuario no existe y se le da click en el input de usuario 
// elimina la notificacion
user.onclick = function(){
    const usuario = document.querySelector(".usuario");
    let aviso = document.querySelector(".usuario-error");
    if(aviso){
        usuario.removeChild(aviso);
    }
}

// si la contraseña es incorrecta crea una notificacion de que la contraseña es incorrecta
function contraseñaIncorrecta(){
    let  contraseña = document.querySelector(".contraseña");
    let aviso = document.createElement('P');
    aviso.textContent = " * Contraseña incorrecta";
    aviso.classList.add('contraseña-error');
    contraseña.appendChild(aviso);
}

// Cuando la contraseña es incorrecta y muestra la notificacion
// Si se le da click en el campo de contraseña, borra la notificacion
pass.onclick = function(){
    const contraseña = document.querySelector(".contraseña");
    let aviso = document.querySelector(".contraseña-error");
    if(aviso){
        contraseña.removeChild(aviso);
    }
}





