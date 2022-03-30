const botonNombre = document.querySelector('.editar-nombre');
const botonContraseña = document.querySelector('.editar-contraseña');
const botonEmail = document.querySelector('.editar-email');
const botonFecha = document.querySelector('.editar-fecha');
const botonPais = document.querySelector('.editar-pais');

let editarContraseña = false;
let botonCancelar = false;

document.addEventListener('DOMContentLoaded',function(){
    let editarPais = false;
     
    botonNombre.onclick = function(e){
        e.preventDefault();
        const nombre = document.querySelector('.perfil-nombre');
        nombre.disabled = false;
        nombre.focus();
        activarBoton();
    }
    
    botonContraseña.onclick = function(e){
        e.preventDefault();
        const nombre = document.querySelector('.perfil-contraseña');
        nombre.disabled = false;
        nombre.focus();

        const confirmar = document.querySelector('.editar-contraseña-confirmar');
        let label = document.createElement('LABEL');
        label.textContent = "Confirmar contraseña";
        let input = document.createElement('INPUT');
        input.setAttribute('type','password');
        input.classList.add('perfil-contraseña-confirmar');
        confirmar.appendChild(label);
        confirmar.appendChild(input);

        activarBoton();
        editarContraseña = true;
    }

    botonEmail.onclick = function(e){
        e.preventDefault();
        const nombre = document.querySelector('.perfil-email');
        nombre.disabled = false;
        nombre.focus();
        activarBoton();
    }

    botonFecha.onclick = function(e){
        e.preventDefault();
        const nombre = document.querySelector('.perfil-fecha');
        nombre.disabled = false;
        nombre.focus();
        activarBoton();
    }
    
    botonPais.onclick = function(e){
        e.preventDefault();
        const nombre = document.querySelector('.perfil-pais');
        nombre.value = "";
        const datalist = document.querySelector(".datalist");
        nombre.disabled = false;
        if(!editarPais){
            $.ajax({
                url: "src/php/leerPaises.php",
                success: function(response){
                   paises = JSON.parse(response);
                   paises.forEach(element => {
                       pais = document.createElement('OPTION');
                       pais.value = element['pais'];
                       datalist.appendChild(pais);
                   });
                }
            });
            editarPais = true;
        }
        nombre.focus();
        activarBoton();
    }

    $('#form-perfil').submit(function(e){
        if(validar(e)){
            e.preventDefault();
            activarCampos();
            $.ajax({
                type: "POST",
                url: "src/php/actualizarUsuario.php",
                data:$(this).serialize(),
                success: function(response){
                    if(response == "Correo invalido"){
                        correoInvalido();
                    }else{
                        window.open('perfil.php',"_self");
                    }
                }
            });
        }
    });
});

function validar(e){
    nombre = document.querySelector('.perfil-nombre').value;
    password = document.querySelector('.perfil-contraseña').value;
    email = document.querySelector('.perfil-email').value;
    fecha = document.querySelector('.perfil-fecha').value;
    pais = document.querySelector('.perfil-pais').value;
    
    if(
        nombre.length === 0  ||
        password.length === 0  ||
        email.length === 0  ||
        fecha.length === 0  ||
        pais.length === 0
    ){
        e.preventDefault();
        alert('Ingrese todos los campos solicitados');
        return false;
    }else if(editarContraseña){
        confirmarPass = document.querySelector('.perfil-contraseña-confirmar').value;
        if (password !== confirmarPass){
            e.preventDefault();
            const confirmar = document.querySelector(".editar-contraseña-confirmar");
            let aviso = document.createElement('P');
            aviso.textContent = " * Las contraseñas no coinciden";
            aviso.classList.add('confirmar-contraseña-error');
            confirmar.appendChild(aviso);
            setTimeout(function(){
                confirmar.removeChild(aviso);
            }, 3000);
            return false;
        }
    }
    return true;
}

function activarBoton(){
    let actualizar = document.querySelector('.boton-actualizar');
    actualizar.disabled = false;

    if(!botonCancelar){
        let cancelar = document.querySelector('.boton-cancelar');
        let boton = document.createElement('BUTTON');
        boton.textContent = "Cancelar";
        boton.classList.add('boton-ingreso');
        cancelar.appendChild(boton);
        botonCancelar = true;
        
        cancelar.onclick = function(){
            window.open('perfil.php',"_self");
        }
    }
}

function activarCampos(){
    const user = document.querySelector('.perfil-user');
    user.disabled = false;
    const nombre = document.querySelector('.perfil-nombre');
    nombre.disabled = false;
    const contraseña = document.querySelector('.perfil-contraseña');
    contraseña.disabled = false;
    const email = document.querySelector('.perfil-email');
    email.disabled = false;
    const fecha = document.querySelector('.perfil-fecha');
    fecha.disabled = false;
    const pais = document.querySelector('.perfil-pais');
    pais.disabled = false;
}

function correoInvalido(){
    let correo = document.querySelector(".correo");
    let aviso = document.createElement('P');
    aviso.textContent = " * Por favor ingrese un correo válido";
    aviso.classList.add('correo-error');
    correo.appendChild(aviso);
    setTimeout(function(){
        correo.removeChild(aviso);
    }, 3000);
}
