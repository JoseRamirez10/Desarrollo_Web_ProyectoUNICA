const divTelefono = document.querySelector('.input-telefono');
const divEmail = document.querySelector('.input-email');

document.addEventListener('DOMContentLoaded',function(){
   $('#form-contacto').submit(function(e){
       if(validarDatos(e)){
           e.preventDefault();
           $.ajax({
                type: "POST",
                url: 'src/php/validarMensaje.php',
                data: $(this).serialize(),
                success: function(response){
                    if(response == "Numero invalido"){
                        numeroInvalido();
                    }else if(response == "Correo invalido"){
                        correoInvalido();
                    }else if(response == "error"){
                        error();
                    }else{
                        confirmar();
                    }
                }
           })
       }
   }) 
});

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

function numeroInvalido(){
    let div = document.querySelector('.campo-telefono');
    let aviso = document.createElement('P');
    aviso.textContent = " * Numero de telefono invalido";
    aviso.classList.add('error');
    div.appendChild(aviso);

    divTelefono.onclick = function(){
        div.removeChild(aviso);
    }
}

function correoInvalido(){
    let div = document.querySelector('.campo-email');
    let aviso = document.createElement('P');
    aviso.textContent = " * Numero de correo invalido";
    aviso.classList.add('error');
    div.appendChild(aviso);

    divEmail.onclick = function(){
        div.removeChild(aviso);
    }
}


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
    }, 2000);
}

function error(){
    const aviso = document.querySelector('.aviso');
    aviso.classList.add('aviso-error');
    const mensaje = document.createElement('P');
    mensaje.textContent = "Tu mensaje no pudo ser enviado";
    aviso.appendChild(mensaje);

    setTimeout(function(){
        aviso.removeChild(mensaje);
    }, 2000);
}