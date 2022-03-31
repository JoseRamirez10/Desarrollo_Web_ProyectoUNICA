<?php

    // Recibe los campos del formulario

    $usuario = $_REQUEST['usuario'];
    $nombre = $_REQUEST['nombre'];
    $contraseña = $_REQUEST['contraseña'];
    $email = $_REQUEST['email'];
    if(!(filter_var($email, FILTER_VALIDATE_EMAIL))){ // Se usa la funcion filter para validar el email
        die("Correo invalido"); // Si es email es invalido regresa "Correo invalido"
    }
    $fecha = $_REQUEST['fecha'];

    $pais = $_REQUEST['pais'];
    
    include "conexion.php"; // Hace una conexion a la base de datos

    // Actualiza los datos que correspondan con el usuario obtenido
    
    $sql = "UPDATE usuarios_proyecto SET nombre='$nombre' WHERE usuario='$usuario'";
    mysqli_query($con, $sql);

    $sql = "UPDATE usuarios_proyecto SET contrasenia='$contraseña' WHERE usuario='$usuario'";
    mysqli_query($con, $sql);

    $sql = "UPDATE usuarios_proyecto SET email='$email' WHERE usuario='$usuario'";
    mysqli_query($con, $sql);

    $sql = "UPDATE usuarios_proyecto SET fechaNacimiento='$fecha' WHERE usuario='$usuario'";
    mysqli_query($con, $sql);

    $sql = "UPDATE usuarios_proyecto SET pais='$pais' WHERE usuario='$usuario'";
    mysqli_query($con, $sql);

    echo "ok";
?>