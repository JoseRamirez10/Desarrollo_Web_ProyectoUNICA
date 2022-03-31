<?php

    // Obtiene los datos de un formulario
    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];

    include "conexion.php"; // Se conecta a la base de datos

    // Instrucciones mysql para obtener la contraseña guardarda por el usuario en la base de datos
    $validandoContraseña = "SELECT contrasenia FROM usuarios_proyecto WHERE usuario ='$usuario' " ;
    $result = mysqli_query($con, $validandoContraseña) or die(mysqli_error($con));
    $pass = mysqli_fetch_array($result);
    $passSql = $pass['contrasenia'];
    
    // Si la contraseña en la base de datos y la inngresada en el formulario coindicen
    if($contraseña == $passSql){ // Elimina al usuario de la base de datos
        $sql = "DELETE FROM usuarios_proyecto WHERE usuario='$usuario'";
        mysqli_query($con, $sql) or die(mysqli_error($con));
        echo "ok";
    }else{ // si no coinciden devuelve "Contraseña incorrecta"
        echo "Contraseña incorrecta";
    }
?>