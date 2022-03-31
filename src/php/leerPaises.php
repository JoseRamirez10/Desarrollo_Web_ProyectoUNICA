<?php
    // Realiza la conexion a la base de datos
    include "conexion.php";
    // Con instruciones mysqli obtiene los datos de la tabla pais
    $sql = "SELECT * FROM pais";
    $result = mysqli_query($con, $sql);
    $data = array(); // Crea un array
    while($pais = mysqli_fetch_array($result)){
        $nombre_pais = $pais['nombre']; 
        $data[] = array('pais'=>$nombre_pais); // Almacena el nombre de los paises en el array
    }
    echo json_encode($data); // Convierte el array en json y lo devuelve

?>