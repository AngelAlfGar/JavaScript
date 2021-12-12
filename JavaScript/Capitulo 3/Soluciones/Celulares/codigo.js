class Celular{
	constructor (color, peso, rdP, rdC, ram){
		this.color = color;
		this.peso = peso;
		this.rdP = rdP
		this.rdC = rdC;
		this.ram = ram;
		this.encendido = false;
		// this.info = `Este celular es de color ${this.color}, pesa ${this.peso} gramos, 
		// tiene una resolución de pantalla de ${this.rdP} pulgadas, una resolución de camara de ${this.rdC}
		// y una memoria RAM de ${this.ram} GB.`
	}

	// verInfo(){
	// 	alert(this.info);
	// }

	precionarBotonEncendido(){
		if(this.encendido == false){
			alert("celular prendido");
			this.encendido = true;
		} else {
			alert ("El celular apagado");
		}

	}

	reiniciar(){
		if (this.encendido == true){
			alert("Reiniciando celular");
		} else {
			alert ("El celular esta apagado");
		}
	}

	tomarFotos(){
		alert(`Foto tomada en una resolución de: ${this.rdC}`)
	}

	grabarVideo(){
		alert(`Grabando video en: ${this.rdC}`);
	}
	mobileInfo(){
		return `
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso} gramos</b><br>
		Resolución de pantalla: <b>${this.rdP} pulgadas</b><br>
		Resolución de video: <b>${this.rdC}</b><br>
		Memoria RAM: <b>${this.ram} GB</b><br>`;

	}

}

class celularAltaGama extends Celular{
	constructor(color, peso, rdP, rdC, ram, rdce){
		super(color, peso, rdP, rdC, ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("Estas grabando en camara lenta");

	}
	reconocimientoFacial(){
		alert("Vamos a iniciar el reconocimiento facial");
	}	
	infoAltaGama(){
		return this.mobileInfo() + `Resolución de camara extra: <b>${this.resolucionDeCamaraExtra} </b><br>`;
	}
}

// DATOS Y SALIDAS PARA LA CLASE SENCILLA

// cel1 = new Celular("Rojo", "150", "4.2", "Full HD", "2");
// cel2 = new Celular("Negro", "130", "5.8", "HD", "4");
// cel3 = new Celular("Azul", "140", "5", "Ultra HD", "8");

// cel1.precionarBotonEncendido();
// cel1.tomarFotos();
// cel1.grabarVideo();
// cel1.reiniciar();
// cel1.precionarBotonEncendido();
// cel1.verInfo();

// document.write(`
// 	${cel1.mobileInfo()} <br>
// 	${cel2.mobileInfo()} <br>
// 	${cel3.mobileInfo()} `);

// DATOS Y SALIDAS PARA LA CLASE CON HERENCIA

cel1 = new celularAltaGama ("Rojo", "130", "5.2", "4K", "4", "Full HD");
cel2 = new celularAltaGama ("Negro", "120", "6", "4K", "8", "Full HD");

document.write(`
	${cel1.infoAltaGama()} <br>
	${cel2.infoAltaGama()} <br>
	`)