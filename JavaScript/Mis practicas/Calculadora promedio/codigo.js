let nombre = prompt("¿Cual es tu nombre?");
let cal1 = prompt("¿Cual es tu calificacion de matematicas?");
let cal2 = prompt("¿Cual es tu calificacion de programacion?");
let cal3 = prompt("¿Cual es tu calificacion redes?");

cal1 = parseInt(cal1);
cal2 = parseInt(cal2);
cal3 = parseInt(cal3);

let promedio1 = (cal1+cal2+cal3)/3;
let promedio = promedio1.toFixed(2);


if(promedio >= 8.5 && promedio <= 9.0){
	beca="Hola "+ nombre + " Tienes un promedio de: "+ promedio + " y tienes un 50% de descuento en tu proxima colegiatura.";

}
else if (promedio > 9.0 && promedio <= 9.5 ){
	beca="Hola "+ nombre + " Tienes un promedio de: "+ promedio + " y tienes un 75% de descuento en tu proxima colegiatura.";

}
else if (promedio > 9.5 && promedio <= 10){
	beca="Hola "+ nombre + " Tienes un promedio de: "+ promedio + " y tienes un 100% de descuento en el pago de proxima colegiatura.";	

}
else {
	beca="Hola "+ nombre + " Tienes un promedio de: "+ promedio + " y no alcanza para un descuento de colegiatura.";
}

alert(beca);


