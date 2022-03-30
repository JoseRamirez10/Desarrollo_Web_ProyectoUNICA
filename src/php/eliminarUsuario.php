<?php

    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];

    include "conexion.php";

    $validandoContraseña = "SELECT contrasenia FROM usuarios_proyecto WHERE usuario ='$usuario' " ;
    $result = mysqli_query($con, $validandoContraseña) or die(mysqli_error($con));
    $pass = mysqli_fetch_array($result);
    $passSql = $pass['contrasenia'];
    
    if($contraseña == $passSql){
        $sql = "DELETE FROM usuarios_proyecto WHERE usuario='$usuario'";
        mysqli_query($con, $sql) or die(mysqli_error($con));
        echo "ok";
    }else{
        echo "Contraseña incorrecta";
    }
?>