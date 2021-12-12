dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
dineroPedro = prompt("¿Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1){
	alert("Cofla, Compra el helado de agua");
	alert("Te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
	alert("Cofla, Compra el helado de crema");
	alert("Te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert("Cofla, Compra el helado de leche");
	alert("Te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
	alert("Cofla, Compra el helado de nutella");
	alert("Te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
	alert("Cofla, Compra el helado de 3 bolas");
	alert("Te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9){
	alert("Cofla, Puedes comprar el helado confites o el pote de 1/4kg");
    alert("Te sobran " + (dineroCofla - 2.9));
} else {
	alert ("Lo siento Cofla, no te alcanza para ningun helado");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1){
	alert("Roberto, Compra el helado de agua");
	alert("Te sobran " + (dineroRoberto - 0.6));
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
	alert("Roberto, Compra el helado de crema");
	alert("Te sobran " + (dineroRoberto - 1));
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
	alert("Roberto, Compra el helado de leche");
	alert("Te sobran " + (dineroRoberto - 1.6));
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
	alert("Roberto, Compra el helado de nutella");
	alert("Te sobran " + (dineroRoberto - 1.7));
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
	alert("Roberto, Compra el helado de 3 bolas");
	alert("Te sobran " + (dineroRoberto - 1.8));
}
else if (dineroRoberto >= 2.9){
	alert("Roberto, Puedes comprar el helado confites o el pote de 1/4kg");
	alert("Te sobran " + (dineroRoberto - 2.9));

} else {
	alert ("Lo siento Roberto, no te alcanza para ningun helado");
}


if (dineroPedro >= 0.6 && dineroPedro < 1){
	alert("Pedro, Compra el helado de agua");
	alert("Te sobran " + (dineroPedro - 0.6));
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
	alert("Pedro, Compra el helado de crema");
	alert("Te sobran " + (dineroPedro - 1));
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
	alert("Pedro, Compra el helado de leche");
	alert("Te sobran " + (dineroPedro - 1.6));
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
	alert("Pedro, Compra el helado de nutella");
	alert("Te sobran " + (dineroPedro - 1.7));
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
	alert("Pedro, Compra el helado de 3 bolas");
	alert("Te sobran " + (dineroPedro - 1.8));
}
else if (dineroPedro >= 2.9){
	alert("Pedro, Puedes comprar el helado confites o el pote de 1/4kg");
	alert("Te sobran " + (dineroPedro - 2.9));

} else {
	alert ("Lo siento Pedro, no te alcanza para ningun helado");
}