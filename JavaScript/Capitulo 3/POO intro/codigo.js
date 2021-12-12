class animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años 
		y soy de color ${this.color}`;

	}

    // ESTO ES UN METODO

	verInfo(){
		document.write(this.info + "<br>");
	}
}

let perro = new animal ("perro", 5, "marron");
let gato = new animal ("gato", 10, "negro");
let canario = new animal ("canario", 3, "verde");

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(canario.info + "<br>");

perro.verInfo();
gato.verInfo();
canario.verInfo();
