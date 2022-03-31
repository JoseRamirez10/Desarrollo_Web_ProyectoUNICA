<?php

    // Obtiene las variables de un formulario
    $nombre = $_REQUEST['nombre'];
    $telefono = $_REQUEST['telefono'];
    if(strlen($telefono) != 10){ // Valida que el campo de telefono tenga el espacio correspondiente
        die("Numero invalido");
    }
    $email = $_REQUEST['email']; // Valida el email mediante la funcion filter
    if(!(filter_var($email, FILTER_VALIDATE_EMAIL))){
        die("Correo invalido");
    }
    $mensaje = $_REQUEST['mensaje'];
    
    include "conexion.php"; // Realiza la conexion a la base de datos

    // Realiza la insercion de los datos del formulario a la tabla mensaje
    $insert = "INSERT INTO mensaje (nombre,telefono,email,mensaje) 
    VALUES ('$nombre', '$telefono', '$email', '$mensaje')";
    if (($result = mysqli_query($con, $insert)) === false){ // Si la insercion falla
        die("error");
    }else{
        echo "ok";
    }
    
?>