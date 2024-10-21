CREATE DATABASE contactanos;
USE contactanos;

-- Crear la tabla 'mensajes'
CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(90) NOT NULL,
    apellido VARCHAR(90) NOT NULL,
    telefono CHAR(9) NOT NULL, 
    correo VARCHAR(120) NOT NULL,
    mensaje TEXT NOT NULL 
);


INSERT INTO mensajes (nombre, apellido, telefono, correo, mensaje)
VALUES ('Luis', 'Mencia', '929428390', 'luis.mencia@gmail.com', 'Este es un mensaje de prueba.');

select * from mensajes;
