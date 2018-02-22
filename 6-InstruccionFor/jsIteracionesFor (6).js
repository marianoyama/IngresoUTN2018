function Mostrar() {
var cantPares = 0;

    for (var numPedido = parseInt(prompt("Ingrese un numero")); numPedido > 1; numPedido -= 2) {

        if (numPedido % 2 == 0) {
            console.log(numPedido);
            cantPares++;
        }
        else {
            numPedido++;
        }
    }

alert("Pares :" + cantPares);



}//FIN DE LA FUNCIÓN