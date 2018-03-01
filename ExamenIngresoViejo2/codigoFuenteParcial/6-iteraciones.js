//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var dias;
    var ventamayor;
    var ventamenor;
    var importe;
    var flag = 0



    for (dias = 0; dias <= 7; dias++) {
        importe = parseFloat(prompt("Ingrese un importe"));

        while (importe <= 0) {
            importe = parseFloat(alert("Tenes que reingresar un numero mayor a 0"));
        }
        if (importe > ventamayor || flag == 0) { 
            ventamayor = importe }

        if (importe < ventamenor || flag == 0) {
            ventamenor = importe
            flag = 1
        }


    }
    alert("La venta menor es " + ventamenor + " y la venta mayor es " + ventamayor);





}

