<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="src/img/favicon.png"/>
    <link rel="stylesheet" href="src/css/style.css">
    <title>Acceso</title>
</head>
<?php
    include "src/php/conexion.php"
?>
<body>
    <header>
        <h1>Acceso</h1>
    </header>

    <form class="acceso" id="form1" name="login">
        <fieldset>
            <legend class="acceso-leyenda">
                Ingrese nombre de usuario y contraseña para ingresar:
            </legend>
            <div class="contenedor-campos">
                <div class="campo usuario">
                    <label>Usuario</label>
                    <input class="entrada-usuario" type="text" name="usuario" placeholder="Usuario">
                </div>
                <div class="campo contraseña">
                    <label>Contraseña</label>
                    <input class="entrada-contraseña" type="password" name="contraseña" placeholder="Contraseña">
                </div>
            </div>
            <input class="boton-ingreso" type="submit" name="enviar" value="Ingresar">
            <p class="registrarse">¿No tienes una cuenta? <a href="registro.php">Registrate</a></p>
        </fieldset>
        <div class="registro"></div>
        <img src="src/img/logo.jpg" class="acceso-imagen">
    </form>
    <footer>
        <p>Todos los Derechos Reservados 2022 &copy;</p>
    </footer>

</body>
<script src="src/js/acceso.js"></script>
<script 
    src="https://code.jquery.com/jquery-3.6.0.js" 
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" 
    crossorigin="anonymous">
</script>
</html>