document.addEventListener('DOMContentLoaded',function(){
    
    //prueba = "joz";
    //localStorage.setItem('usuario', prueba);

    let usuario = localStorage.getItem('usuario');
    $.ajax({
        type: "POST",
        url: "src/php/obtenerUsuario.php",
        data: 'usuario='+usuario,
        success: function(response){
            datos = JSON.parse(response);
            imprimirDatos(datos);
        }
    });
});

function imprimirDatos(datos){
    let usuario = document.querySelector('.perfil-user');
    usuario.value = datos[0]['usuario'];
    let nombre = document.querySelector('.perfil-nombre');
    nombre.value = datos[0]['nombre'];
    let contraseña = document.querySelector('.perfil-contraseña');
    contraseña.value = datos[0]['contrasenia'];
    let email = document.querySelector('.perfil-email');
    email.value = datos[0]['email'];
    let fecha = document.querySelector('.perfil-fecha');
    fecha.value = datos[0]['fecha'];
    let pais = document.querySelector('.perfil-pais');
    pais.value = datos[0]['pais'];
}