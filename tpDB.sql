
/*SELECT apellido2
FROM empleado

SELECT DISTINCT apellido1
FROM empleado

SELECT *
FROM empleado

SELECT nombre, apellido1, apellido2
FROM empleado

SELECT DISTINCT id_departamento DISTINCT ELIMINA LOS REPETIDOS
FROM empleado

SELECT CONCAT(nombre, ' ', apellido1, ' ', apellido2) AS nombre_completo CONCAT cancatena los valores en una sola columna
FROM empleado;

SELECT UPPER(CONCAT(nombre, ' ', apellido1, ' ', apellido2)) AS nombre_completo
FROM empleado;
SELECT LOWER(CONCAT(nombre, ' ', apellido1, ' ', apellido2)) AS nombre_completo
FROM empleado;
ALTER TABLE departamento
ADD COLUMN gastos DOUBLE;

SELECT presupuesto, gastos, (presupuesto - gastos) AS actual
FROM departamento
ORDER BY actual ASC;


SELECT apellido1, apellido2, nombre as nombre_completo
FROM empleado
ORDER BY 
apellido1 ASC,
apellido2 ASC, 
nombre ASC;



SELECT nombre, presupuesto AS presu
FROM departamento
ORDER BY presupuesto DESC
limit 3



SELECT nombre, presupuesto
FROM departamento
WHERE presupuesto > 15000 OR presupuesto = 15000

*/

SELECT nombre
FROM departamento
WHERE presupuesto < 10000 OR presupuesto > 20000









