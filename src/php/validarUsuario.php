<?php

    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];

    include "conexion.php";

    $validarUsuario = "SELECT * FROM usuarios_proyecto WHERE usuario = '$usuario'";
    $result = mysqli_query($con, $validarUsuario) or die(mysqli_error($con));
    if(mysqli_num_rows($result) == 0){
        die("Usuario no existe");
    }

    $validarContraseña = "SELECT * FROM usuarios_proyecto WHERE contrasenia = '$contraseña' AND usuario='$usuario'";
    $result = mysqli_query($con, $validarContraseña) or die(mysqli_error($con));
    if(mysqli_num_rows($result) == 0){
        die("Contraseña incorrecta");
    }
    echo $usuario;

?>