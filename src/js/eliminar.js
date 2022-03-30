const eliminar = document.querySelector('.boton-eliminar');

document.addEventListener('DOMContentLoaded',function(){
    
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

        $('#form-delete').submit(function (e){
            e.preventDefault();
            let confirmacion = confirm('¿Seguro que quieres eliminar tu cuenta?');
            if(confirmacion){
                usuario = localStorage.getItem('usuario');
                $.ajax({
                    type: "POST",
                    url: 'src/php/eliminarUsuario.php',
                    data:$(this).serialize() + "&usuario="+usuario,
                    success: function(response){
                        if(response == "Contraseña incorrecta"){
                            alert('La contraseña no coincide');
                            input.value = "";
                            input.focus();
                        }else{
                            bienvenida = false;
                            localStorage.setItem('bienvenida',bienvenida);
                            window.open('index.php', "_self");
                            /*
                            const registro = true;
                            localStorage.setItem('registro',registro);
                            window.open('index.php',"_self");*/
                        }
                    }
                });
            }
        });
    }
});