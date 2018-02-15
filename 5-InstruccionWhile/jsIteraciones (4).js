function Mostrar()
{
 
 var numero = prompt("Pedir un numero del 1 al 9");

 while(numero > 9 || numero < 0)
{
 numero = prompt("Numero incorrecto, ingresar nuevamente");
}

	document.getElementByid("Numero").value = numero
}//FIN DE LA FUNCIÓN