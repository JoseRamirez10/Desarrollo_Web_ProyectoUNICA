//const validar = document.querySelector(".boton-ingreso");
const contraseña = document.querySelector(".entrada-contraseña");
const confirmarContraseña = document.querySelector(".entrada-confirmar-contraseña");
const campoCorreo = document.querySelector(".entrada-email");

document.addEventListener('DOMContentLoaded',function(){
    $('#form1').submit(function (e){
        if(validar(e)){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: 'src/php/ingresarUsuario.php',
                data:$(this).serialize(),
                success: function(response){
                    if(response == "Correo invalido"){
                        correoInvalido();
                    }
                    if(response == "Usuario existente"){
                        console.log(response);
                    }
                    else{
                        window.open('index.php',"_self");
                        let registro = true;
                        localStorage.getItem('registro',registro);
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
    
    if(
        nombre.length === 0  ||
        usuario.length === 0  ||
        password.length === 0  ||
        email.length === 0  ||
        fecha.length === 0  ||
        pais.length === 0
    ){
        alert('Ingrese todos los campos solicitados');
        e.preventDefault();
        return false;
    }else if (contraseña.value !== confirmarContraseña.value){
        const confirmar = document.querySelector(".confirmar-contraseña");
        let aviso = document.createElement('P');
        aviso.textContent = " * Las contraseñas no coinciden";
        aviso.classList.add('confirmar-contraseña-error');
        confirmar.appendChild(aviso);
        e.preventDefault();
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

function anularAviso(){
    const confirmar = document.querySelector(".confirmar-contraseña");
    let aviso = document.querySelector(".confirmar-contraseña-error");
    if(aviso){
        confirmar.removeChild(aviso);
    }
}

function correoInvalido(){
    let correo = document.querySelector(".correo");
    let aviso = document.createElement('P');
    aviso.textContent = " * Por favor ingrese un correo válido";
    aviso.classList.add('correo-error');
    correo.appendChild(aviso);
}

campoCorreo.onclick = function(){
    const correo = document.querySelector(".correo");
    let aviso = document.querySelector(".correo-error");
    if(aviso){
        correo.removeChild(aviso);
    }
}