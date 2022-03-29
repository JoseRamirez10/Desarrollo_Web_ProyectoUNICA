<?php
    
    $nombre = $_REQUEST['nombre'];
    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];
    $email = $_REQUEST['email'];
    if(!(filter_var($email, FILTER_VALIDATE_EMAIL))){
        die("Correo invalido");
    }
    $fecha = $_REQUEST['fecha'];

    $pais = $_REQUEST['pais'];

    $recibir = (isset($_POST['recibir'])?$_POST['recibir']:"off");
    if($recibir == "on"){
        $recibir = 1;
    }else{
        $recibir = 0;
    }
    $recibir;

    $fecha_actual = date('Y-m-d');

    include "conexion.php";
    
    $validandoNombre = "SELECT * FROM usuarios_proyecto WHERE usuario ='$usuario' " ;
    $result = mysqli_query($con, $validandoNombre) or die(mysqli_error($con));
    if (mysqli_num_rows($result) == 0){ // No existe en la bd
        $insert = "INSERT INTO usuarios_proyecto (nombre,usuario,email,contrasenia,pais,fechaNacimiento,recibirInf,fechaRegistro) 
        VALUES ('$nombre', '$usuario', '$email', '$contraseña', '$pais', '$fecha', '$recibir', '$fecha_actual')";
        if (($result = mysqli_query($con, $insert)) === false){
            echo "No se pudo realizar la insercion";
            echo mysqli_error($con);
        }else{
            echo "ok";
            //header("Location: hola.php");
        }
    }else{
        echo "Usuario existente";
    }
    //echo "<br><a href='bd.php'>Regresar</a>";
?>