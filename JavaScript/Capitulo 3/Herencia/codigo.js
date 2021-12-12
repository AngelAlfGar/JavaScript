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

	// ladrar(){
	// 	if(this.especie == "perro"){
	// 		document.write(this.info + " ¡Wow!"+ "<br>");

	// 	}else{
	// 		document.write(this.info + " No puedo ladrar, ya que soy un " + this.especie + "<br>")
	// 	}
	// }
}

class Perro extends Animal{
	constructor(especie, edad, color, raza){
		super(especie, edad, color);
		this.raza = raza;
	}

	ladrar(){
		alert("Wow");
	}
}

let perro = new Perro ("perro", 5, "cafe", "doberman");
let gato = new Animal ("gato", 8, "negro");
let canario = new Animal ("canario", 10, "verde");

perro.verInfo();
gato.verInfo();
canario.verInfo();

