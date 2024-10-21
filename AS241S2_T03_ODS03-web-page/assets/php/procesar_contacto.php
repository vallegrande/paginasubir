<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";  
$password = "Mencia1234";  
$dbname = "Consultas"; 

// Conectar a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);


$nombre = $conn->real_escape_string($_POST['nombre']);
$apellido = $conn->real_escape_string($_POST['apellido']);
$telefono = $conn->real_escape_string($_POST['telefono']);
$correo = filter_var($_POST['correo'], FILTER_SANITIZE_EMAIL);
$mensaje = $conn->real_escape_string($_POST['mensaje']);

// Validar el correo electrónico
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    die("El correo electrónico no es válido.");
}

// Insertar los datos en la base de datos
$sql = "INSERT INTO contacto (nombre, apellido, telefono, correo, mensaje) 
        VALUES ('$nombre', '$apellido', '$telefono', '$correo', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "Mensaje enviado exitosamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>