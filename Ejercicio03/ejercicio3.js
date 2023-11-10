'use strict'

let apodo = prompt("Ingrese su apodo");

if (apodo == null){
    alert(apodo ?? "Anonymous");
}
else{
    alert ("Su apodo es: " + apodo)
}