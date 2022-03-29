<?php

    $usuario =  $_POST['usuario'];
    
    include "conexion.php";
    $validarUsuario = "SELECT * FROM usuarios_proyecto WHERE usuario = '$usuario'";
    $result = mysqli_query($con, $validarUsuario) or die(mysqli_error($con));
    $data = array();
    $resultado = mysqli_fetch_array($result);
        $usuario = $resultado['usuario'];
        $nombre = $resultado['nombre'];
        $contraseña = $resultado['contrasenia'];
        $email = $resultado['email'];
        $fecha = $resultado['fechaNacimiento'];
        $pais = $resultado['pais'];
        $data[] = array('usuario'=>$usuario, 'nombre'=>$nombre, 'contrasenia'=>$contraseña, 'email'=>$email, 'fecha'=>$fecha, 'pais'=>$pais);
        echo json_encode($data);
        
?>