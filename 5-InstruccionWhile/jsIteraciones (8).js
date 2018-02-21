function Mostrar() {


	var positivo = 0;
	var negativo = 1;
	var respuesta 
	var numero
	var flag = 0

	do {
		numero = parseInt(prompt("Ingrese numero"));
		if (numero >= 0) {
			positivo += numero;
		}
		else {
			negativo *= numero;
			flag = 1
		}
		respuesta = prompt("Quiere seguir ingresando");
		respuesta = respuesta.toLowerCase();
	}
	while (respuesta != "no");
	if (flag == 0)
	negativo = flag

	document.getElementById("suma").value = positivo;
	document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN