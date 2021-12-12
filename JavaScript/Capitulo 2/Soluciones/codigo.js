
/*-------------------FIESTA--------------------*/
// let free = false; 

// const validarCliente = (time)=>{
// 	let edad = prompt ("¿Cual es tu edad?");
// 	if (edad >= 18){
// 		if(time >= 2 && time < 7 && free == false){
// 			alert ("Puedes pasar gratis porque eres la primer persona despues de las 2 AM");
// 			free = true;
// 		} else {
// 			alert (`Son las ${time}:00 hrs. y puedes pasar, pero tienes que pagar la entrada.`);
// 		}

// 	} else {
// 		alert ("Eres menor de edad y no puedes pasar.");

// 	}
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2.4);
// validarCliente(3);

/*-------------------ASISTENCIAS--------------------*/

// let cantidad = prompt ("¿Cuntos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i ++){
// 	alumnosTotales[i] = [prompt("Nombre del alumno: " + (i+1)),0];

// }

// const tomarAsistencias = (nombre, p)=>{
// 	let presencia = prompt(nombre);
// 	if(presencia == "p" || presencia == "P"){
// 		alumnosTotales[p][1]++;

// 	}
// }

// for (i = 0; i < 30; i++){
// 	for (alumno in alumnosTotales){
// 		tomarAsistencias(alumnosTotales[alumno][0], alumno);
// 	}
// }

// for (alumno in alumnosTotales){
// 	let resultado = `${alumnosTotales[alumno][0]}: <br>
// 	_________Presentes: <b>${alumnosTotales[alumno][1]} </b> <br>
// 	_________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`
// 	if (30 - alumnosTotales[alumno][1] > 18){
// 		resultado += "<b style='color: red'>REPROBADO POR INASISTENCIAS</b><br><br>";
// 	} else {
// 		resultado += "<br><br>"
// 	}
// 	document.write(resultado);
// }

/*-------------------CALCULADORA--------------------*/

const sumar = (num1, num2) => {
	return parseInt(num1) + parseInt(num2);

}

const restar = (num1, num2) => {
	return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) => { 
	return parseInt(num1) * parseInt(num2);

}

const dividir = (num1, num2) => {
	return parseInt(num1) / parseInt(num2);

}

alert("¿Que operación deseas realizar?");
let resp = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División");

if (resp == 1){
	let numero1 = prompt("Primer número para sumar");
	let numero2 = prompt("segundo número para sumar");
	resultado = sumar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
} else if (resp == 2){
	let numero1 = prompt("Primer número para restar");
	let numero2 = prompt("segundo número para restar");
	resultado = restar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);

} else if (resp == 3){
	let numero1 = prompt("Primer número para multiplicar");
	let numero2 = prompt("segundo número para multiplicar");
	resultado = multiplicar(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
} else if (resp == 4){
	let numero1 = prompt("Primer número para dividir");
	let numero2 = prompt("segundo número para dividir");
	resultado = dividir(numero1,numero2);
	alert(`Tu resultado es: ${resultado}`);
} else {
	alert("La opcion no se identificó.");

}