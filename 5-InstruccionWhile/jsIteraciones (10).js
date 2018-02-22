function Mostrar()
/*1-Suma de los negativos.
	 2-Suma de los positivos. 
	 3-Cantidad de positivos.
	  4-Cantidad de negativos. 
	  5-Cantidad de ceros.
	   6-Cantidad de números pares.
		7-Promedio de positivos. 8-Promedios de negativos.
		 9-Diferencia entre positivos y negativos, (positvos-negativos).*/ {

	var sumaPos = 0;
	var sumaNeg = 0;
	var contPos = 0;
	var contNeg = 0;
	var contCeros = 0;
	var contPares = 0;
	var promPos;
	var promNeg;
	var diferencia;
	var respuesta;
	var numero;


	do {


		numero = parseInt(prompt("Ingrese su numero :"));

		if (numero < 0) {
			sumaNeg += numero;
			contNeg++;
		}

		else if (numero > 0) {
			sumaPos += numero;
			contPos++;
		}
		else {
			contCeros++;
		}


		if (numero % 2 == 0) {
			contPares++;
		}


		respuesta = prompt("Desea continuar ?: ")
	} while (respuesta == 's')

	promPos = sumaPos / contPos;
	promNeg = sumaNeg / contNeg;
	diferencia = promPos - promNeg;





	document.write("1-Suma de los negativos: " + sumaNeg + "<br/>");
	document.write("2-Suma de los positivos: " + sumaPos + "<br/>");
	document.write("3-Cantidad de positivos: " + contPos + "<br/>");
	document.write("4-Cantidad de negativos: " + contNeg + "<br/>");
	document.write("5-Cantidad de ceros: " + contCeros + "<br/>");
	document.write("6-Cantidad de números pares: " + contPares + "<br/>");
	document.write("7-Promedio de positivos: " + promPos + "<br/>");
	document.write("8-Promedios de negativos: " + promNeg + "<br/>");
	document.write("Diferencia entre positivos y negativos: " + diferencia + "<br/>");

}//FIN DE LA FUNCIÓN