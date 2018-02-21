function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero
	var promedio

	while (respuesta == 's' )
	 {
		
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador = contador + 1;
		respuesta = prompt("Desea continuar");
		
		}
		promedio = acumulador / contador;


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=promedio;

}//FIN DE LA FUNCIÓN