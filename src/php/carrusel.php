<?php
    include "conexion.php"; // Realiza una conexion a la base de datos

    // Obtiene todas las rutas de las imagenes que contiene la base de datos

    $sql = "SELECT * FROM imagenes";
    $result = mysqli_query($con, $sql);
    $data = array(); // Crea un array
    while($imagen = mysqli_fetch_array($result)){ // Guarda los datos de la base en un array
        $id = $imagen['id'];
        $path = $imagen['path'];
        $data[] = array('id'=>$id, 'path'=>$path); // Especifica los campos del array en donde va guardar
    }
    $dataJSON = json_encode($data); // Convierte el array en json
    echo $dataJSON;  // Devuelve el objeto json 
?>