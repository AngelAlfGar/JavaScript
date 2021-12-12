let numero = 0;
/*numeroParaSumar = 0;

if(numeroParaSumar < 10){
	document.write("verdadero");

}

if(numero < 10){
	
	numero++;

	document.write(numero);

}*/

/*----------------BUCLES-----------------------*/
/*----------------WHILE------------------------*/

/*while(numero < 8){
	numero++;

	document.write(numero);
}*/

/*----------------DO WHILE---------------------*/

/*do{

	document.write (numero + '<br>');
	numero++

}

while (numero <= 6)*/

/*------------------BREAK----------------------*/

/*while(numero < 1000){
	numero++;
	document.write(numero + '<br>');
	if (numero == 10){
		break;
	}

}

document.write("fin");*/

/*-------------------FOR-----------------------*/

/*for(let i = 0; i < 6; i++){
	document.write(i + '<br>');
}*/

/*for(let i = 0; i < 20; i++){
	document.write(i + '<br>');
	if(i == 12){
		break;
	}
}*/

/*for(let i = 0; i < 20; i++){
	
	if(i == 12){
		continue;
	}

	document.write(i + '<br>');
}*/

/*------------------FOR IN y OF--------------------*/

/*let animales = ["gato", "perro", "t-rex"];

for (animal in animales){
	document.write(animales + '<br>');
	document.write(animales [animal] + '<br>');
}

document.write ("<br>");

for (animal of animales){
	document.write(animal + '<br>');
}*/

/*array1=["maria", "josefa", "roberta"];
array2=["pedro","marcelo", array1, "josefina"];

for(let array in array2){
	if(array == 2){
		for(let array of array1){
			document.write(array + "<br>");

		}
	}else {
		document.write(array2[array] + "<br>")
	}
}*/


array1=["ps1", "ps2", "ps3", "ps4"];
array2=["xbox1", "xbox360", array1, "xboxone", "xboxX"];

for (let array of array2){
	if(array == "xboxone"){
		for(let array of array1){
			document.write(array + "<br>");

		}
		/*break;*/
		continue;
    }

    document.write(array + "<br>");
}



