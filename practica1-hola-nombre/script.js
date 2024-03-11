function cambiarNombre(){
let nombre = prompt("¿Cual es tu nombre?");
document.getElementById("letrero").innerHTML=`Hola ${nombre}`; ;
console.log(document.getElementById("letrero"));
}
