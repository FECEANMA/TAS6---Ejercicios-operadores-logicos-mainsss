'use strict' 

let edad = Number(prompt("Ingrese su edad"));
let licencia = confirm("Tienes licencia");

if (edad>=25 && licencia){
    alert("Apto");
}
else {
    alert ("No apto");
}