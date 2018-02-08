/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero1;
    var numero2;
    
    var sumar;
    var restar;
    var multiplicar;
    var dividir;

    
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt(numero2);

    sumar = numero1 + numero2;


    alert("La suma es " + sumar); 
}

function restar()
{   var restar;
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt(numero2);
    
    restar = numero1 - numero2;

    alert("La resta es " + restar);
	
}

function multiplicar()
{   var multiplicar;
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt(numero2);
    
    multiplicar = numero1 * numero2;

    alert("La multiplicación es " + multiplicar);
	
}

function dividir()
{var dividir;
    numero1 = document.getElementById("numeroUno").value;
    numero1 = parseInt(numero1);

    numero2 = document.getElementById("numeroDos").value;
    numero2 = parseInt(numero2);
    
    dividir = numero1 / numero2;

    alert("La división es " + dividir);
	
}

