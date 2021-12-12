/*function saludar(){

respuesta = prompt("¡Hola! ¿Cómo fue tu día?");

if(respuesta=="bien"){
	alert("me alegro");
}else{
	alert("una pena");
}

}
saludar();*/

/*-----------------------------------------------*/

/*function saludar(){
	alert ("Hola");
	return "La función se ejecutó correctamente.";
}

let saludo = saludar();

document.write(saludo);*/

/*-----------------------------------------------*/

/*let num1 = 32;
let num2 = 12;

function suma(){
	let res = num1 + num2;
	document.write(res);
}

suma();*/

/*-----------------------------------------------*/

/*function suma(num1, num2){
	let res = num1 + num2;
	return res;
}

let resultado = suma(12,23);
document.write(resultado)*/

/*-----------------------------------------------*/

// function saludar (nombre){
// 	let frase = `¡Hola ${nombre}! ¿Cómo estas?`;
// 	document.write(frase); 
// }
// saludar("rancio");

/*--------------FUNCIONES FLECHA------------------*/

const saludar = (nombre=>{
	let frase = `¡Hola ${nombre}! ¿Cómo estas?`;
	document.write(frase); 
}

saludar("pedro");