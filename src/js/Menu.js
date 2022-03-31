// La primera vez que accede el usuario al menu
// Se crea una notificacion de bienvenida
function bienvenida(){
    // Con la localStorage valida si es la primera vez que se accede a la pagina
    let bienvenida = localStorage.getItem('bienvenida');
    const usuario = localStorage.getItem('usuario');
    if(bienvenida == "false"){
        colocarBienvenida(usuario);
        bienvenida = true;
        localStorage.setItem('bienvenida', bienvenida);
    }
}

// Crea la notifiacion de bienvenida
// usando el nombre del usuario que da localStorage
function colocarBienvenida(usuario){
    let divBienvenida = document.querySelector(".bienvenida");
    let bienvenida = document.createElement('h1');
    bienvenida.textContent = "¡Bienvenido "+usuario+"!";
    bienvenida.classList.add("bienvenida-usuario");
    divBienvenida.appendChild(bienvenida);

    setTimeout(function(){
        divBienvenida.removeChild(bienvenida);
    }, 1500); // El mensaje desaparece despues de un segundo y medio

}

// Crea un carrusel de imagenes en el body de la pagina
function cargarCarrusel(){
    bienvenida(); // Manda a llamar a la funcion de bienvenida
    // Hace una solicitud a php usando ajax
    // Si la solicitud es correcta devuelve en un json la ruta de las imagenes 
    // que estan en la base de datos, y crea el carrusel
    $.ajax({ 
        type: "POST",
        url: 'src/php/carrusel.php',
        success: function(response){
            if(!response){
                console.log("error");
            }else{ 
                imagenes = JSON.parse(response); // Recibe un json de las rutas de las imagenes
                iniciarCarrusel(imagenes); // inicia el carrusel
            }
        }
    });

    function iniciarCarrusel(imagenes){
        images = [];
        for(i = 0; i<imagenes.length; i++){
            images.push(imagenes[i]['path']);
        }
        const intervalo_miliseg = 3000;
        let actual = 0;
        let imagen = document.querySelector('.carrusel-imagen');
        colocarImagen();
        // Botones para cambiar de imagen
        const botones = document.createElement('DIV');
        botones.classList.add('carrusel-botones');
        imagen.appendChild(botones);

        const retroceder = document.createElement('P');
        retroceder.textContent = '<';
        retroceder.classList.add('carrusel-retroceder');

        const delante = document.createElement('P');
        delante.textContent = '>';
        delante.classList.add('carrusel-delante');

        botones.appendChild(retroceder);
        botones.appendChild(delante);

        let intervalo = setInterval(reproducir, intervalo_miliseg);
        
        function reproducir(){
            if (actual >= images.length - 1){
                actual = 0;
            }else{
                actual++;
            }
            colocarImagen();
        }
    
        function colocarImagen(){
            imagen.style.backgroundImage = `url(${images[actual]})`;
        }
    
        retroceder.onclick = function(){
            if(actual == 0){
                actual = images.length -1;
            }else{
                actual--;
            }
            colocarImagen();
        }
    
        delante.onclick = function(){
            reproducir()
            colocarImagen();
        }
    }

}


