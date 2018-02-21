function Mostrar() {

    var sexo = prompt("ingrese f ó m .");
    sexo = sexo.toLowerCase();
    while (sexo != "f" && sexo != "m") {
        sexo = prompt("Sexo incorrecto, pruebe nuevamente");
        sexo = sexo.toLocaleLowerCase();    }
    if (sexo == "m") {
        sexo = "Eres Masculino";

    }

    else {
        sexo = "Eres Femenino";
    }


    document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN