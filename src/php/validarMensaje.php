<?php

    $nombre = $_REQUEST['nombre'];
    $telefono = $_REQUEST['telefono'];
    if(strlen($telefono) != 10){
        die("Numero invalido");
    }
    $email = $_REQUEST['email'];
    if(!(filter_var($email, FILTER_VALIDATE_EMAIL))){
        die("Correo invalido");
    }
    $mensaje = $_REQUEST['mensaje'];
    
    include "conexion.php";

    $insert = "INSERT INTO mensaje (nombre,telefono,email,mensaje) 
    VALUES ('$nombre', '$telefono', '$email', '$mensaje')";
    if (($result = mysqli_query($con, $insert)) === false){
        die("error");
    }else{
        echo "ok";
    }
    
?>