class Animal{
	constructor (especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = ` Soy ${this.especie}, tengo ${this.edad} años y 
		soy de color ${this.color}`;

	}
    
    // ESTOS SON METODOS

	verInfo(){
		document.write(this.info + "<br>");
	}
}

class Perro extends Animal{
	constructor(especie, edad, color, raza){
		super(especie, edad, color);
		this.raza = null;
	}

 	// METODOS ESTATICOS, GET Y SET

	static ladrar(){
		alert("Wow");
	}

	set setRaza(newName){
		this.raza = newName;
	}

	get getRaza(){
		return this.raza;
	}
}


// LOS OBJETOS SE DECLARAN COMO "CONST" NO COMO "LET"

const perro = new Perro ("perro", 5, "cafe", "doberman");
const gato = new Animal ("gato", 8, "negro");
const canario = new Animal ("canario", 10, "verde");

perro.setRaza = "Doberman";
document.write(perro.getRaza);

