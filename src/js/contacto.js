
function enviar(){

    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;
    if(nombre.length == 0 || telefono.length == 0 || email.length == 0 || mensaje.length == 0){
        alert("Llena todos los campos por favor");
    }
    
    
}