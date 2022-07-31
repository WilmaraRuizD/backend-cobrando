CREATE DATABASE IF NOT EXISTS company;

USE company ;

CREATE TABLE departamento(
codigo INT(10),
nombre VARCHAR(100),
presupuesto DOUBLE);

ALTER TABLE departamento
ADD PRIMARY KEY (codigo);

ALTER TABLE departamento
    MODIFY codigo INT(10)NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

DESCRIBE departamento ;

INSERT INTO departamento values
(1,'Financiero', 2000.1),
(2,'Recursos Humanos',3020.2),
(3,'Comercial',4054.2),
(4,'Compras', 5467.1);

 SELECT * FROM departamento;

CREATE TABLE empleados(
codigo INT(11) NOT NULL,
nit VARCHAR(9),
nombre VARCHAR(100)DEFAULT NULL,
apellido1 VARCHAR(100) NOT NULL,
apellido2 VARCHAR(100) NOT NULL,
codigo_departamento INT(10),
CONSTRAINT fk_codigo_departamento FOREIGN KEY(codigo_departamento)REFERENCES departamento(codigo)
 );

ALTER TABLE empleados
ADD PRIMARY KEY (codigo);

ALTER TABLE empleados
    MODIFY codigo INT(10)NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

DESCRIBE empleados;

INSERT INTO empleados values
(1,'807.890-7','Ryan','ruiz' ,'contreras','1'),
(2,'102.897-3','joe ','peres','gelvez','2'),
(3,'104-345-4','johan','leal','gonzales','3'),
(4,'800-567-8','carlos','leon' ,'castro','2'),
(5,'102-678-7','jose ','garcia','quintero','3'),
(6,'104.876-9','brando','colmenares','osorio','1'),
(7,'102.456-2','juan ','lizarazo','velez','4'),
(8,'104.567-6','cristian','zapata','duque','4');

 SELECT * FROM departamentos;
 SELECT * FROM empleados; 

 SELECT * FROM departamento WHERE codigo=1
 
 SELECT * FROM departamento a INNER JOIN empleados b ON b.codigo_departamento =a.codigo;