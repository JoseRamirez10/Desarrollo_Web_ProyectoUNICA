function bienvenida(){
    let bienvenida = localStorage.getItem('bienvenida');
    const usuario = localStorage.getItem('usuario');
    if(bienvenida == "false"){
        colocarBienvenida(usuario);
        bienvenida = true;
        localStorage.setItem('bienvenida', bienvenida);
    }
}

function colocarBienvenida(usuario){
    let divBienvenida = document.querySelector(".bienvenida");
    let bienvenida = document.createElement('h1');
    bienvenida.textContent = "¡Bienvenido "+usuario+"!";
    bienvenida.classList.add("bienvenida-usuario");
    divBienvenida.appendChild(bienvenida);

    setTimeout(function(){
        divBienvenida.removeChild(bienvenida);
    }, 1500);

}


function cargarCarrusel(){
    bienvenida();
    $.ajax({
        type: "POST",
        url: 'src/php/carrusel.php',
        success: function(response){
            if(!response){
                console.log("error");
            }else{
                imagenes = JSON.parse(response);
                iniciarCarrusel(imagenes);
            }
        }
    });

    function iniciarCarrusel(imagenes){
        images = [];
        for(i = 0; i<imagenes.length; i++){
            images.push(imagenes[i]['path']);
        }
        /*const images = [
            'src/img/assasins1.jpg',
            'src/img/assasins2.jpg',
            'src/img/assasins3.jpg',
            'src/img/assasins4.jpg',
            'src/img/assasins5.jpg',
            'src/img/assasins6.jpg',
            'src/img/assasins7.jpg',
            'src/img/assasins8.jpg',
        ];*/
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


