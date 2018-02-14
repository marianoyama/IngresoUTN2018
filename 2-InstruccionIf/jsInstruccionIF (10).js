function Mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var numeroaleatorio
	numeroaleatorio = Math.floor(Math.random() * 10) + 1;

	

	if (numeroaleatorio >= 9) 
	{
		alert(numeroaleatorio + " Excelente");
	}
	else
		if (numeroaleatorio < 4)
			alert(numeroaleatorio + " Vamos, la proxima se puede");
		else
		{ alert(numeroaleatorio + " Aprobò") }


}//FIN DE LA FUNCIÓN