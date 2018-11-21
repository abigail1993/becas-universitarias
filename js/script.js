function validar(){
    var pago = parseFloat(document.getElementById("pago").value);
    var promedio = parseFloat(document.getElementById("promedio").value);


    if(promedio <=5){
        var reprobado = "Tu promedio es una calificación reprobatoria así que te recomendamos que estudies."
        document.getElementById("res").innerHTML = reprobado;
        document.getElementById("cuadro").classList.add("rojo");
        document.getElementById("cuadro").classList.remove("amarillo");
        document.getElementById("cuadro").classList.remove("negro");
        document.getElementById("cuadro").classList.remove("verde");
        document.getElementById("cuadro").classList.remove("todo");


    }

    if (promedio == 7 || promedio == 6){
        var noValido = "Tu promedio es bajo y no se te puede otorgar ninguna beca. Pero puedes esforzarte para subir tu promedio el próximo mes.";
        
        document.getElementById("res").innerHTML = noValido;
        document.getElementById("cuadro").classList.add("amarillo");
        document.getElementById("cuadro").classList.remove ("verde");
        document.getElementById("cuadro").classList.remove("negro");

    }
    
    if (promedio === 8 || promedio === 8.0 ) {
        var descuento =  pago * 20 / 100;
        var pagoFinal = pago - descuento;  
     
      document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
      document.getElementById("cuadro").classList.remove ("rojo");
      document.getElementById("cuadro").classList.add ("verde");
      document.getElementById("cuadro").classList.remove("negro");
      document.getElementById("cuadro").classList.remove("amarillo");

    } 

   
    if(promedio >= 8.1 && promedio <= 8.9){
      var descuento = 20;
      var nuevo = promedio.toString();//esto lo convierte en una cadena ejem:"8.1"
      var numNuevo = nuevo[2];//para sacar lo que esta en el index 2
      var cambioNum = parseInt(numNuevo);//para volverlo a convertir en numero 
      var porAjustado = descuento + cambioNum;
      var descuentoReal = pago * porAjustado /100;
      var pagFinal = pago - descuentoReal;
      document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagFinal + " Recuerda que puedes mejorar.";           
      document.getElementById("cuadro").classList.remove("negro");
      document.getElementById("cuadro").classList.add("verde");
      document.getElementById("cuadro").classList.remove("amarillo");
      document.getElementById("cuadro").classList.remove("todo");

    }
    if (promedio ===9 || promedio === 9.0 ) {
        var descuento = pago * 30 / 100;

         var pagoFinal = pago - descuento;
     
     document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ " + pagoFinal + " ¡Eres bueno, continua así!";
     document.getElementById("cuadro").classList.remove("negro");
     document.getElementById("cuadro").classList.add("verde");
     document.getElementById("cuadro").classList.remove("amarillo");
     document.getElementById("cuadro").classList.remove("todo"); 
    }
    if( promedio >= 9.1 && promedio <=9.9){
      var descuento = 30;
      var nuevo = promedio.toString();//esto lo convierte en una cadena ejem:"9.1"
      var numNuevo = nuevo[2];//para sacar lo que esta en el index 2
      var cambioNum = parseInt(numNuevo);//para volverlo a convertir en numero 
      var porAjustado = descuento + cambioNum;
      var descuentoReal = pago * porAjustado /100;
      var pagFinal = pago - descuentoReal;

      document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagFinal + "  ¡Eres bueno, continua así!";           
      document.getElementById("cuadro").classList.remove("negro");
      document.getElementById("cuadro").classList.add("verde");
      document.getElementById("cuadro").classList.remove("amarillo");
      document.getElementById("cuadro").classList.remove("todo");
    }
    if(promedio == 10 ) {
        var perfecto = "¡Felicidades! Por tu buen desempeño se te hace el 100% de descuento en tu mensualidad. Y no tienes que realizar ningun pago.";
     document.getElementById("res").innerHTML = perfecto;
     document.getElementById("cuadro").classList.remove("negro");
     document.getElementById("cuadro").classList.remove("verde");
     document.getElementById("cuadro").classList.remove("amarillo");
     document.getElementById("cuadro").classList.add("todo");

           
    }

    if(promedio >= 10.1 || promedio >= 11){
        var noCalifica = "El promedio que ingresaste no es valido, por favor verifica la información."
     
        document.getElementById("res").innerHTML = noCalifica;
      document.getElementById("cuadro").classList.add("negro");
      document.getElementById("cuadro").classList.remove("todo");

    }
}

