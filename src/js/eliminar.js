const eliminar = document.querySelector('.boton-eliminar');

document.addEventListener('DOMContentLoaded',function(){
    
    // Si se le da click al boton de eliminar usuario en perfil.php
    // Crea un formulario donde pide que se ingrese la contraseña del usuario para
    // poder ser eliminado
    eliminar.onclick = function(){
        const divEliminar = document.querySelector('.botones-extra');
        divEliminar.removeChild(eliminar);

        const formularioEliminar = document.querySelector('.formulario-eliminar');
        const label = document.createElement('LEGEND');
        label.textContent = "Ingresa contraseña para eliminar usuario";
        const separacion = document.createElement('HR');
        const campos = document.createElement('DIV');
        campos.classList.add('campos-eliminar');
        const input = document.createElement('INPUT');
        input.setAttribute('type','password');
        input.setAttribute('name','contraseña');
        const boton = document.createElement('BUTTON');
        boton.setAttribute('type', 'submit');
        boton.textContent = "Confirmar";
    
        campos.appendChild(input);
        campos.appendChild(boton);
        
        formularioEliminar.appendChild(label);
        formularioEliminar.appendChild(separacion);
        formularioEliminar.appendChild(campos);

        // si se le da submit al formulario creado
        $('#form-delete').submit(function (e){
            e.preventDefault();
            // Muestra un mensaje de confirmacion
            let confirmacion = confirm('¿Seguro que quieres eliminar tu cuenta?');
            if(confirmacion){ // Si el usuario confirma
                usuario = localStorage.getItem('usuario'); // Obtiene el usuario que esta haciendo la solicitud de la
                                                        // localStorage
                $.ajax({ // Manda la solicitud por ajax
                    type: "POST",
                    url: 'src/php/eliminarUsuario.php',
                    data:$(this).serialize() + "&usuario="+usuario, // Agrega al formulario la variable de usuario
                    success: function(response){
                        if(response == "Contraseña incorrecta"){ // Si la contraseña no coincide
                            alert('La contraseña no coincide'); // Manda una alerta
                            input.value = ""; // Reinicia el campo de contraseña
                            input.focus();
                        }else{
                            bienvenida = false; // Si se confirma la eliminacion
                            localStorage.setItem('bienvenida',bienvenida); // Reinicia los valores de bienvenida
                            window.open('index.php', "_self"); // Redirecciona a la pagina de acceso
                        }
                    }
                });
            }
        });
    }
});