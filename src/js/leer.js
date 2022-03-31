document.addEventListener('DOMContentLoaded',function(){

    let usuario = localStorage.getItem('usuario');
    // Obtiene la variable de usuario que guarda el localStorage
    $.ajax({ // Manda una solicitud por ajax
        type: "POST",
        url: "src/php/obtenerUsuario.php",
        data: 'usuario='+usuario, // Manda el usuario loggeado
        success: function(response){
            datos = JSON.parse(response); // Obtiene los datos en json y los transforma
            imprimirDatos(datos); // Imprime los datos en pantalla
        }
    });
});

// Manipula los datos del json y los imprime en los input correspondiente
// para poder visualizar la informacion del perfil
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