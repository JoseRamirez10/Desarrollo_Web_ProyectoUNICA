<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="src/img/faviconNosotros.png"/>
    <link rel="stylesheet" href="src/css/style.css">
    <title>Mi Perfil</title>
</head>
<body>
    <header>
        <h1>Assasin's Creed</h1>
    </header>
    <nav>
        <div class="nav-fondo">
            <ul class="nav-enlace">
                <li><a href="menu.html">Menu</a></li>
                <li><a href="principal.html">Principal</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </div>
    </nav>
    <form class="perfil-form" id="form-perfil">
        <fieldset>
            <legend>Informacion de perfil</legend>
            <hr>
            <div class="perfil-form-contenedor">
                <div class="perfil-input">
                    <label>Usuario</label>
                    <input class="perfil-user" type="text" name="usuario" disabled>
                </div>
                <div class="perfil-input">
                    <label>Nombre</label>
                    <input class="perfil-nombre" type="text" name="nombre" disabled>
                    <button class="editar-nombre">Editar</button>
                </div>
                <div class="perfil-input">
                    <label>Contraseña</label>
                    <input class="perfil-contraseña" type="password" name="contraseña" disabled>
                    <button class="editar-contraseña">Editar</button>
                </div>
                <div class="perfil-input editar-contraseña-confirmar">
                </div>
                <div class="perfil-input correo">
                    <label>Email</label>
                    <input class="perfil-email" type="email" name="email" disabled>
                    <button class="editar-email">Editar</button>
                </div>
                <div class="perfil-input">
                    <label>Fecha de nacimiento</label>
                    <input class="perfil-fecha" type="date" name="fecha" disabled>
                    <button class="editar-fecha">Editar</button>
                    <p class="perfil-formato-fecha"> * yyyy-mm-dd</p>
                </div>
                <div class="perfil-input">
                    <label>Pais</label>
                    <input class="perfil-pais" list="pais" name="pais" disabled>
                    <datalist id="pais" class="datalist">
                    </datalist>
                    <button class="editar-pais">Editar</button>
                </div>
            </div>
            <div class="botones-actualizar">
                <input class="boton-ingreso boton-actualizar" type="submit" name="enviar" value="Actualizar informacion" disabled>
            </div>
        </fieldset>
    </form>
    <div class="botones-actualizar botones-extra">
        <div class="boton-cancelar"></div>
        <button class="boton-ingreso boton-eliminar">Eliminar perfil</button>
    </div>
    <form id="form-delete" class="formulario-eliminar"></form>
    <footer>
        <div class="footer">
            <div class="footer-nav">
                <nav class="nav">
                    <a class="footer-enlace" href="./nosotros.html">Nosotros</a>
                    <a class="footer-enlace" href="./contacto.html">Contacto</a>
                </nav>
                <div class="footer-redes">
                    <a href="#"><img class="footer-icon" src="src/img/facebook.png""></a>
                    <a href="#"><img class="footer-icon" src="src/img/instagram.png"></a>
                </div>
            </div>
            <p>Todos los Derechos Reservados 2022 &copy;</p>
        </div>
    </footer>
    
</body>
<script src="src/js/leer.js"></script>
<script src="src/js/actualizar.js"></script>
<script src="src/js/eliminar.js"></script>
<script 
    src="https://code.jquery.com/jquery-3.6.0.js" 
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" 
    crossorigin="anonymous">
</script>
</html>