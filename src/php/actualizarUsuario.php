<?php
    $usuario = $_REQUEST['usuario'];
    $nombre = $_REQUEST['nombre'];
    $contraseña = $_REQUEST['contraseña'];
    $email = $_REQUEST['email'];
    if(!(filter_var($email, FILTER_VALIDATE_EMAIL))){
        die("Correo invalido");
    }
    $fecha = $_REQUEST['fecha'];

    $pais = $_REQUEST['pais'];
    
    
    include "conexion.php";
    
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

    echo $usuario;
?>