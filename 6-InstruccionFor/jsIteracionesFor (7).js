function Mostrar() {

    var numero
    var i
    var contador = 0;

    numero = parseInt(prompt("Ingrese un numero"));

    for (i = 1; i <= numero; i++)
         {
        if (numero % i == 0) 
        {
            console.log(i);
            contador++;
        }
    }
console.log ("Se registraron " + contador + ("numeros divisores"));






}//FIN DE LA FUNCIÓN