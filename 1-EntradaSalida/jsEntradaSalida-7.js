/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1
var num2
var suma
var resta
var multiplica
var dividir

num1 = document.getElementById("numeroUno").value;
num1 = parseInt(num1);

num2 = document.getElementById("numeroDos").value;
num2 = parseInt(num2);

function sumar()
{	suma = num1 + num2
	
}

function restar()
{ resta = num1 + num2
	
}

function multiplicar()
{ multiplica = num1 + num2
	
}

function dividir()
{dividir = num1 + num2
	
    alert("la resta es " + dividir)
}

