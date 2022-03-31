<?php
    // Realiza la conexion a la base de datos
    include "config.php"; // Incluye las variables para conectarse a la base
    $con = mysqli_connect($server, $username, $password, $dbname);
    if(!$con || $con ===false){ // Si no se puede conectar a la base
        die("No se pudo conectar"); // Devuelve un error
    }
?>