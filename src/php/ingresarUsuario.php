<?php
    
    // Obtiene los datos de un formulario
    $nombre = $_REQUEST['nombre'];
    $usuario = $_REQUEST['usuario'];
    $contraseña = $_REQUEST['contraseña'];
    $email = $_REQUEST['email'];
    if(!(filter_var($email, FILTER_VALIDATE_EMAIL))){ // Valida que el email sea correcto
        die("Correo invalido");
    }
    $fecha = $_REQUEST['fecha'];

    $pais = $_REQUEST['pais'];

    $recibir = (isset($_POST['recibir'])?$_POST['recibir']:"off"); // Valida la opcion de recibir cuando no se marca
    if($recibir == "on"){ // Convierte recibir en un char
        $recibir = 1;
    }else{
        $recibir = 0;
    }
    $recibir;

    $fecha_actual = date('Y-m-d'); // Obtiene la fecha actual

    include "conexion.php"; // Realiza la conexion a la base de datos
    
    // Valida que el usuario no exista en la base de datos
    $validandoNombre = "SELECT * FROM usuarios_proyecto WHERE usuario ='$usuario' " ;
    $result = mysqli_query($con, $validandoNombre) or die(mysqli_error($con));
    if (mysqli_num_rows($result) == 0){ // No existe en la bd
        // Realiza la insercion de valores en la base de datos
        $insert = "INSERT INTO usuarios_proyecto (nombre,usuario,email,contrasenia,pais,fechaNacimiento,recibirInf,fechaRegistro) 
        VALUES ('$nombre', '$usuario', '$email', '$contraseña', '$pais', '$fecha', '$recibir', '$fecha_actual')";
        if (($result = mysqli_query($con, $insert)) === false){ // Si no se pudo realizar la insercion
            echo "No se pudo realizar la insercion";
            echo mysqli_error($con);
        }else{
            echo "ok";
        }
    }else{
        echo "Usuario existente";
    }
?>