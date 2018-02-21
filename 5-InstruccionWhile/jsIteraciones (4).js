function Mostrar()
{
 
 var numero = prompt("Pedir un numero del 1 al 9");

 while(numero > 9 || numero < 1)
{
	 numero = prompt("Numero incorrecto, ingresar nuevamente")
	 
}
		
	numero = prompt("Clave correcta");
	document.parseInt(getElementByid("Numero").value) = numero;
}//FIN DE LA FUNCIÓN