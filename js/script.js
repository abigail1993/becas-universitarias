
function validar(){
    var pago = parseFloat(document.getElementById("pago").value);
    var promedio = parseFloat(document.getElementById("promedio").value);


    if(promedio <=5){
        var reprobado = "Tu promedio es una calificación reprobatoria así que te recomendamos que estudies."
        document.getElementById("res").innerHTML = reprobado;
        document.getElementById("cuadro").classList.add("rojo");

    }

    if (promedio == 7 || promedio == 6){
        var noValido = "Tu promedio es bajo y no se te puede otorgar ninguna beca. Pero puedes esforzarte para subir tu promedio el próximo mes.";
        
        document.getElementById("res").innerHTML = noValido;
        document.getElementById("cuadro").classList.add("amarillo");

    }
    
    if (promedio === 8 || promedio === 8.0 ) {
        var porcentaje = 20;
        var tot = 100;
        var descuento =  pago * porcentaje / tot;
        var pagoFinal = pago - descuento;  
     
     document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
    } else {
        for(promedio ===8.1; promedio <= 8.9; promedio++){
          var por2 = (porcentaje +1)
          var descuento2 = pago * por2 / tot;
          var final2 = pago -descuento2;
        }
        document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ final2 + " Recuerda que puedes mejorar.";           

    }



    if (promedio == "9" ) {
        var descuento = pago * 30 / 100;

         var pagoFinal = pago - descuento;
     
     document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ " + pagoFinal + " ¡Eres bueno, continua así!";
                
    }
    
    if(promedio == "10" ) {
        var perfecto = "¡Felicidades! Por tu buen desempeño se te hace el 100% de descuento en tu mensualidad. Y no tienes que realizar ningun pago.";
     document.getElementById("res").innerHTML = perfecto;
           
    }

    if(promedio >= 11 ){
        var noCalifica = "El promedio que ingresaste no es valido, por favor verifica la información."
    document.getElementById("res").innerHTML = noCalifica;
    document.getElementById("cuadro").classList.add("rojo");
    }
}

