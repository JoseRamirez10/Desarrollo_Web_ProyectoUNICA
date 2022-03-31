const divTelefono = document.querySelector('.input-telefono');
const divEmail = document.querySelector('.input-email');

document.addEventListener('DOMContentLoaded',function(){
    
    // Si se hace submit al formulario de contacto
    $('#form-contacto').submit(function(e){ 
       if(validarDatos(e)){  // Valida que los campos esten llenos
           e.preventDefault();
           $.ajax({ // ajax manda los datos a php
                type: "POST",
                url: 'src/php/validarMensaje.php',
                data: $(this).serialize(),
                success: function(response){
                    if(response == "Numero invalido"){ // Si el numero de telefono es invalido
                        numeroInvalido();
                    }else if(response == "Correo invalido"){
                        correoInvalido(); // Si el correo es invalido
                    }else if(response == "error"){
                        error(); // Si ocurrio algun error en la consulta
                    }else{
                        confirmar(); // Si se envio exitosamente
                    }
                }
           })
       }
   }) 
});

// Revisa que todos los datos esten llenos
// Si alguno esta vacio manda una alerta
function validarDatos(e){
    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;
    if(nombre.length == 0 || telefono.length == 0 || email.length == 0 || mensaje.length == 0){
        alert("Llena todos los campos por favor");
        e.preventDefault();
        return false;
    }
    return true;
}

// Si el numero de telefono es invalido crea una notificacion
function numeroInvalido(){
    let div = document.querySelector('.campo-telefono');
    let aviso = document.createElement('P');
    aviso.textContent = " * Numero de telefono invalido";
    aviso.classList.add('error');
    div.appendChild(aviso);

    // La notifiacion se elimina cuando se le da click al campo
    // de telefono
    divTelefono.onclick = function(){
        div.removeChild(aviso);
    }
}

// Crea una notifiacion de correo invalido
function correoInvalido(){
    let div = document.querySelector('.campo-email');
    let aviso = document.createElement('P');
    aviso.textContent = " * Numero de correo invalido";
    aviso.classList.add('error');
    div.appendChild(aviso);

    // Elimina la notificacion cuando se le da click al campo
    // de email
    divEmail.onclick = function(){
        div.removeChild(aviso);
    }
}

// Crea una notifiacion que indica que se envio correctamente el formulario
// Reinicia los campos del formulario
function confirmar(){
    const aviso = document.querySelector('.aviso');
    aviso.classList.add('aviso-correcto');
    const mensaje = document.createElement('P');
    mensaje.textContent = "Se envio tu mensaje correctamente";
    aviso.appendChild(mensaje);
    
    nombre = document.getElementById("nombre");
    nombre.value = "";
    telefono = document.getElementById("telefono");
    telefono.value = "";
    email = document.getElementById("email");
    email.value = "";
    campoMensaje = document.getElementById("mensaje");
    campoMensaje.value = "";

    setTimeout(function(){
        aviso.removeChild(mensaje);
    }, 2000); // La notificacion desaparece a los 2 segundos
}

// Crea una notificacion de error
function error(){
    const aviso = document.querySelector('.aviso');
    aviso.classList.add('aviso-error');
    const mensaje = document.createElement('P');
    mensaje.textContent = "Tu mensaje no pudo ser enviado";
    aviso.appendChild(mensaje);

    setTimeout(function(){
        aviso.removeChild(mensaje); // Desaparece a los dos segundos
    }, 2000);
}