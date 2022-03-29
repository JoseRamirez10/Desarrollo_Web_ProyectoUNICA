<?php
    include "config.php";
    $con = mysqli_connect($server, $username, $password, $dbname);
    if(!$con || $con ===false){
        die("No se pudo conectar");
    }
?>