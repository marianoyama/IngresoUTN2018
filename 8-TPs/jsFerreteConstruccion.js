/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   var Largo;
    var Ancho;
    Largo = parseInt(document.getElementById("Largo").value);
    Ancho = parseInt(document.getElementById("Ancho").value);
    Radio = (Largo*2 + Ancho*2) * 3;
    document.getElementById("Radio").value = Radio;

}
function Circulo () 
{   var Largo;
    var Ancho;
    var Radio;
	Radio = parseInt(document.getElementById("Radio").value);
    resultado = 2 * 3.1416 * Radio;
    alambre = resultado * 3;
    alert ("Se necesitan comprar " + alambre + " metros de alambre");
}
function Materiales () 
{
	var Largo;
    var Ancho;
    Largo = parseInt(document.getElementById("Largo").value);
    Ancho = parseInt(document.getElementById("Ancho").value);
    Radio = (Largo * Ancho)
    bolsasdeCal = 3 * Radio
    bolsasdeCemento = 2 * Radio
    
    alert("Se necesitan " + bolsasdeCal + "bolsas de cal y" + bolsasdeCemento + "bolsas de cemento") 
}