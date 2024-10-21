<?php

$server = "localhost"; 
$user = "root"; 
$password = "Mencia1234";
$db = "Consultas"; 

$conexion = new mysqli($server, $user, $password, $db);


if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.";
}

?>
