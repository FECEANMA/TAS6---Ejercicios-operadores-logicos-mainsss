'use strict'

let promedio = Number(prompt("Ingrese su promedio"));
let ingresosMensuales= Number(prompt(" Ingrese sus ingresos mensuales familiares"));
if (promedio>=8.5 && ingresosMensuales<=600 ){
    alert("Aprobado");
}
else {
    alert ("Desaprobado");
}
