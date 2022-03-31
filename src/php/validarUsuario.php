<?php

    // Recibe los datos de un formulario
    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];

    include "conexion.php"; // Realiza la conexion a la base de datos

    // Valida que el usuario exista en la base de datos
    $validarUsuario = "SELECT * FROM usuarios_proyecto WHERE usuario = '$usuario'";
    $result = mysqli_query($con, $validarUsuario) or die(mysqli_error($con));
    if(mysqli_num_rows($result) == 0){ // Si el usuario no existe
        die("Usuario no existe");
    }

    // Valida que la contraseña corresponda con el usuario ingresado
    $validarContraseña = "SELECT * FROM usuarios_proyecto WHERE contrasenia = '$contraseña' AND usuario='$usuario'";
    $result = mysqli_query($con, $validarContraseña) or die(mysqli_error($con));
    if(mysqli_num_rows($result) == 0){ // si la contraseña es incorrecta
        die("Contraseña incorrecta");
    }
    echo $usuario;

?>