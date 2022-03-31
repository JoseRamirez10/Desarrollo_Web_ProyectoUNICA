//const validar = document.querySelector(".boton-ingreso");
const contraseña = document.querySelector(".entrada-contraseña");
const confirmarContraseña = document.querySelector(".entrada-confirmar-contraseña");
const campoCorreo = document.querySelector(".entrada-email");
const campoUsuario = document.querySelector(".entrada-usuario");

document.addEventListener('DOMContentLoaded',function(){

    // Cuando se hace submit del formulario de registro
    // Hace una solicitud a php usando ajax
    $('#form1').submit(function (e){
        if(validar(e)){ // Valida que los campos no esten vacios
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: 'src/php/ingresarUsuario.php',
                data:$(this).serialize(),
                success: function(response){
                    if(response == "Correo invalido"){ // Si el correo es invalido
                        correoInvalido();
                    }else if(response == "Usuario existente"){ // Si el usuario ya existe
                        usuarioExistente();
                    }else{
                        // Si todo es correcto guarda la variable de registro en el localStorage
                        // para darle un aviso a la pagina index.php de que el registro se hizo 
                        // correctamente
                        const registro = true;
                        localStorage.setItem('registro',registro);
                        window.open('index.php',"_self");
                        // Redirecciona a la pagina de index.php (acceso)
                    }
                }
            });
        }
    });

});

function validar(e){
    nombre = document.querySelector('.entrada-nombre').value;
    usuario = document.querySelector('.entrada-usuario').value;
    password = document.querySelector('.entrada-contraseña').value;
    email = document.querySelector('.entrada-email').value;
    fecha = document.querySelector('.entrada-fecha').value;
    pais = document.querySelector('.entrada-pais').value;
    
    // Valida que los campos no esten vacios
    if(
        nombre.length === 0  ||
        usuario.length === 0  ||
        password.length === 0  ||
        email.length === 0  ||
        fecha.length === 0  ||
        pais.length === 0
    ){
        e.preventDefault();
        alert('Ingrese todos los campos solicitados'); // Si estan vacios muestra una alerta
        return false;
    }else if (contraseña.value !== confirmarContraseña.value){ // Valida que las contraseñas coincidan
        e.preventDefault(); // Si no coinciden crea una notifiacion
        const confirmar = document.querySelector(".confirmar-contraseña");
        let aviso = document.createElement('P');
        aviso.textContent = " * Las contraseñas no coinciden";
        aviso.classList.add('confirmar-contraseña-error');
        confirmar.appendChild(aviso);
        return false;
    }
    return true;
}

contraseña.onclick = function(){
    anularAviso();
}
confirmarContraseña.onclick = function(){
    anularAviso();
}

// Anula las notificaciones de error de contraseña
function anularAviso(){
    const confirmar = document.querySelector(".confirmar-contraseña");
    let aviso = document.querySelector(".confirmar-contraseña-error");
    if(aviso){
        confirmar.removeChild(aviso);
    }
}

// Crea una notificacion de correo invalido
function correoInvalido(){
    let correo = document.querySelector(".correo");
    let aviso = document.createElement('P');
    aviso.textContent = " * Por favor ingrese un correo válido";
    aviso.classList.add('correo-error');
    correo.appendChild(aviso);
}

// Anula la notifiacion de error del correo
campoCorreo.onclick = function(){
    const correo = document.querySelector(".correo");
    let aviso = document.querySelector(".correo-error");
    if(aviso){
        correo.removeChild(aviso);
    }
}

// Crea una notificacion de usuario existente
function usuarioExistente(){
    let usuario = document.querySelector(".registro-usuario");
    let aviso = document.createElement('P');
    aviso.textContent = " * El usuario ya existe";
    aviso.classList.add('correo-error');
    usuario.appendChild(aviso);
}

// Anula la notifiacion de error del correo
campoUsuario.onclick = function(){
    const usuario = document.querySelector(".registro-usuario");
    let aviso = document.querySelector(".correo-error");
    if(aviso){
        usuario.removeChild(aviso);
    }
}