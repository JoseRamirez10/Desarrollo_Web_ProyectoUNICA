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
    include "src/php/conexion.php";
?>
<body>
    <header>
        <h1>Registro</h1>
    </header>
    <form class="acceso" id="form1" name="registro">
        <fieldset>
            <legend class="acceso-leyenda">
                Ingrese nombre de usuario y contraseña para ingresar:
            </legend>

            <div class="contenedor-campos">
                <div class="campo">
                    <label>Nombre</label>
                    <input class="entrada-nombre" type="text" name="nombre" placeholder="Nombre Apellido">
                </div>
                <div class="campo registro-usuario">
                    <label>Usuario</label>
                    <input class="entrada-usuario" type="text" name="usuario" placeholder="Usuario">
                </div>
                <div class="campo">
                    <label>Contraseña</label>
                    <input class="entrada-contraseña" type="password" name="contraseña" placeholder="Contraseña">
                </div>
                <div class="campo confirmar-contraseña">
                    <label>Confirmar contraseña</label>
                    <input class="entrada-confirmar-contraseña" type="password" name="validarContraseña" placeholder="Confirmar contraseña">
                </div>
                <div class="campo correo">
                    <label>Correo electronico</label>
                    <input class="entrada-email" type="email" name="email" placeholder="ejemplo@email.com">
                </div>
                <div class="campo">
                    <label>Fecha de nacimiento</label>
                    <input class="entrada-fecha" type="date" name="fecha" placeholder="Fecha">
                </div>
                <div class="campo">
                    <label>Pais</label>
                    <input class="entrada-pais" list="pais" name="pais" placeholder="Selecciona un pais">
                    <datalist id="pais">
                    <?php
                        // Consulta de la base de datos para devolver un datalist de los paises que se pueden elegir
                        $sql = "SELECT * FROM pais";
                        $result = mysqli_query($con, $sql);
                        while($pais = mysqli_fetch_array($result)){
                            $nombre_pais = $pais['nombre'];
                            echo "<option value='$nombre_pais'/>";
                        }
                    ?>
                    </datalist>
                </div>
                <div class="campo">
                    <label>Recibir informacion</label>
                    <input class="entrada-recibir" type="checkbox" name="recibir" placeholder="Recibir">
                </div>
            </div>
            <input class="boton-ingreso" type="submit" name="enviar" value="Registrar">
        </fieldset>
        <img src="src/img/logo.jpg" class="registro-imagen">
    </form>
    
    <footer class="footer-registro">
        <p>Todos los Derechos Reservados 2022 &copy;</p>
    </footer>

</body>
<script src="src/js/registro.js"></script>             
<script 
    src="https://code.jquery.com/jquery-3.6.0.js" 
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" 
    crossorigin="anonymous">
</script>
</html>