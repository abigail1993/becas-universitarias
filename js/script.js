function validar(){
    var pago = parseInt(document.getElementById("pago").value);
    var promedio = parseInt(document.getElementById("promedio").value);
    
    if (promedio == "8" ) {
        var descuento = pago * 20 / 100;

         var pagoFinal = pago - descuento;
     
     document.getElementById("res").innerHTML = pagoFinal;

                
    }
    if (promedio == "9" ) {
        var descuento = pago * 30 / 100;

         var pagoFinal = pago - descuento;
     
     document.getElementById("res").innerHTML = pagoFinal;

                
    }
    else if(promedio == "10" ) {
        var perfecto = "¡Felicidades! Por tu buen desempeño se te hace el 100% de descuento en tu mensualidad, Sigue asi.";
     document.getElementById("res").innerHTML = perfecto;
           
    }

}


