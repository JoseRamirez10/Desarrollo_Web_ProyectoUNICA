<?php
    include "conexion.php";

    $sql = "SELECT * FROM imagenes";
    $result = mysqli_query($con, $sql);
    $data = array();
    while($imagen = mysqli_fetch_array($result)){
        $id = $imagen['id'];
        $path = $imagen['path'];
        $data[] = array('id'=>$id, 'path'=>$path);
    }
    $dataJSON = json_encode($data);
    echo $dataJSON; 
?>