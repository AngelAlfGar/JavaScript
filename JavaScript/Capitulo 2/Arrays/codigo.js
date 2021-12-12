// let frutas = ["banana", "pera", "naranja"];

// // document.write(frutas);

// document.write(frutas[1]);

// ---------------------------------------------------------------

pc1 = {
	nombre: "Angel",
	procesador: "Intel Core i7",
	ram: "16GB",
	espacio: "1TB"
};

pc2 = ["Angel", "Intel Core i7", "16GB", "1TB"];

// document.write(pc1["procesador"]+pc1["ram"]+pc2[3]);

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = ["espacio"];

frase = `el nombre de mi PC es: ${nombre} <br>
		 el procesador es: ${procesador} <br>
		 la memoria RAM es de: ${ram} <br>
		 el almacenamiento es de: ${espacio}`;

document.write(frase);