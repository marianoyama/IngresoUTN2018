//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{    var ancho;
    var largo;
    var perimetro;

    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);

    perimetro = ancho*2 + largo*2;

	perimetro = perimetro*6;

    alert("Se necesitan " + perimetro + " hilos de alambre");
}

