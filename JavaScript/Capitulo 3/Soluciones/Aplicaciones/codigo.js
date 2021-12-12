class App{
	constructor (descargas, puntuacion, peso){
		this.descargas =descargas;
		this.puntuacion=puntuacion;
		this.peso=peso;
		this.iniciada = false;
		this.instalada = false;
	}

	abrir(){
		if(this.iniciada == false && this.instalada == true ){
			this.iniciada = true
			alert ("App encendida");

		}

	}
	cerrar(){
		if(this.iniciada == true){
			this.iniciada = false
			alert ("App cerrada");

		}

	}

	instalar(){
		if(this.instalada == false){
			this.instalada = true;
			alert("App instalada correctamente");
		}
	}

	desinstalar(){
		if(this.instalada == true){
			this.instalada = false;
			alert("App desinstalada correctamente");
		}
	}

	showInfo(){
		return `ESTA APLICACIÓN TIENE <br>
		Descargas: <b>${this.descargas}</b> <br>
		Puntuación: <b>${this.puntuacion}</b> <br>
		Peso: <b>${this.peso}</b> <br>`;
	}
}

app1 = new App("16,000", "5 estrellas", "900 MG");
app2 = new App("1,000", "3 estrellas", "100 MG");
app3 = new App("45,000", "2 estrellas", "30 MG");
app4 = new App("18,000", "4 estrellas", "250 MG");
app5 = new App("20,000", "4 estrellas", "450 MG");
app6 = new App("30,000", "3 estrellas", "360 MG");
app7 = new App("25,000", "5 estrellas", "120 MG");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

document.write (`
	${app1.showInfo()} <br>
	${app2.showInfo()} <br>
	${app3.showInfo()} <br>
	${app4.showInfo()} <br>
	${app5.showInfo()} <br>
	${app6.showInfo()} <br>
	${app7.showInfo()} <br>`);
