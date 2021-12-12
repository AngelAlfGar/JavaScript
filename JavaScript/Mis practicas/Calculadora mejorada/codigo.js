/*Mensaje de bienvienida*/

alert("Bienvenido al sistema para calcular tu beca. Da click en 'Aceptar' para comenzar.");

/*Pedimos datos por pantalla*/

let nombre=prompt("Escribe tu nombre completo en mayúsculas");
let matricula=prompt("Escribe tu matrícula");
let cal1=prompt("¿Cúal es tu calificación en ingles?");
let cal2=prompt("¿Cúal es tu calificación en informática?");
let cal3=prompt("¿Cúal es tu calificación en ciencias?");
let cal4=prompt("¿Cúal es tu calificación en matemáticas?");

/*Recibimos datos tipo cadena y los parseamos a tipo entero (numero)*/

cal1=parseFloat(cal1);
cal2=parseFloat(cal2);
cal3=parseFloat(cal3);
cal4=parseFloat(cal4);

/*Operacion para determianr el promedio*/

let promedio0=(cal1+cal2+cal3+cal4)/4;
let promedio=promedio0.toFixed(2);

/*Condicionales para determinar estatus del alumno*/

if(promedio >= 8 && promedio < 8.5){
	beca=("No tienes derecho a una beca");
}else if (promedio >= 8.5 && promedio < 9){
	beca=("50% de descuento");

}else if (promedio >= 9 && promedio < 9.5){
	beca=("75% de descuento");

}else if (promedio >= 9.5 && promedio <= 10){
	beca=("100% de descuento");

}else{
	beca=("Su promedio es reprobatorio y no aplica para una beca");
}

document.write('<center>' + '<hr>'
	+ '<img src="u.png" width="120px" height="120px">' + '<br />'
    + '<strong><p>Universidad Tecnologíca Angelina</p></strong>' 
	+ '<hr>' + "NOMBRE:  " + '<strong><i>' + nombre + '</i></strong>' + '<br />'
	+ "MATRÍCULA: " + '<strong><i>' + matricula + '</i></strong>'
	+ '<hr>'
	+ "Calificación de ingles: " + cal1 + '<br />'
	+ "Calificación de informática: " + cal2 + '<br />'
	+ "Calificación de ciencias: " + cal3 + '<br />'
	+ "Calificación de matemáticas: " + cal4 + '<br />'
	+ '<hr>' 
	+ "Tu promedio final es: " + promedio + '<br />'
	+ "Beca: " + beca + '<br />'
	+ '<hr>'
	+ "¿Desea reiniciar el proceso o imprimir comprobante?" + '<br />'+'<br />'
	+ '<button style="background-color: skyblue;" onClick="location.reload();">Reiniciar</button>&nbsp;&nbsp;' 
	+ '<button style="background-color: skyblue;" onClick="window.print();">Imprimir</button>' 
	+ '<hr> </center>');


