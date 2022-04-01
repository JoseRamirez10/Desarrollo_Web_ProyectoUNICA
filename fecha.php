<?php

    echo "Hola <br>";
    $fecha = "1997-12-15";
    $fechaPhp = date('Y-m-d', strtotime($fecha));
    echo $fechaPhp;


?>