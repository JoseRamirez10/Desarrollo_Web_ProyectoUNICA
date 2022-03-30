<?php

    include "conexion.php";
    $sql = "SELECT * FROM pais";
    $result = mysqli_query($con, $sql);
    $data = array();
    while($pais = mysqli_fetch_array($result)){
        $nombre_pais = $pais['nombre'];
        $data[] = array('pais'=>$nombre_pais);
    }
    echo json_encode($data);

?>