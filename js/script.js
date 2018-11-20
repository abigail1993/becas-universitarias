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
    /*lo siguiente es una prueba para simplificar el codigo y tratar de hacer que si el promedio aumentaba  tambien el 
    porcentaje, pero se me dificulto encontrar esa manera, que se que era la mejor para un codigo mas limpio.
    else if (promedio> 8.0 && promedio<= 8.9) {
       var porc = 20;
       var porNuevo = porc +1;
       var desc = pago * porNuevo/100;
       var final= pago -desc;
       console.log(porNuevo);

       console.log(final); 
    }*/

    switch(promedio){
        case 8.1:
            var descuento =  pago * 21 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
   
        break;

        case 8.2:
            var descuento =  pago * 22 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;

        case 8.3:
            var descuento =  pago * 23 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;

        case 8.4:
            var descuento =  pago * 24 / 100;
            var pagoFinal = pago - descuento;  
 
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;

        case 8.5:
            var descuento =  pago * 25 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;
        case 8.6:
            var descuento =  pago * 26 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;
        case 8.7:
            var descuento =  pago * 27 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;
        case 8.8:
            var descuento =  pago * 28 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;
        case 8.9:
            var descuento =  pago * 29 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove ("rojo");
          document.getElementById("cuadro").classList.add ("verde");
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.remove("amarillo");
        break;
    }

    if (promedio == "9" ) {
        var descuento = pago * 30 / 100;

         var pagoFinal = pago - descuento;
     
     document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ " + pagoFinal + " ¡Eres bueno, continua así!";
     document.getElementById("cuadro").classList.remove("negro");
     document.getElementById("cuadro").classList.add("verde");
     document.getElementById("cuadro").classList.remove("amarillo");
     document.getElementById("cuadro").classList.remove("todo"); 
    }
    
    switch(promedio){
        case 9.1:
            var descuento =  pago * 31 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;

        case 9.2:
            var descuento =  pago * 32 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;

        case 9.3:
            var descuento =  pago * 33 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;

        case 9.4:
            var descuento =  pago * 34 / 100;
            var pagoFinal = pago - descuento;  
 
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;

        case 9.5:
            var descuento =  pago * 35 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;
        case 9.6:
            var descuento =  pago * 36 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;
        case 9.7:
            var descuento =  pago * 37 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;
        case 9.8:
            var descuento =  pago * 38 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;
        case 9.9:
            var descuento =  pago * 39 / 100;
            var pagoFinal = pago - descuento;  
     
          document.getElementById("res").innerHTML = "Tu mensualidad en esta ocasión sera de $ "+ pagoFinal + " Recuerda que puedes mejorar.";           
          document.getElementById("cuadro").classList.remove("negro");
          document.getElementById("cuadro").classList.add("verde");
          document.getElementById("cuadro").classList.remove("amarillo");
          document.getElementById("cuadro").classList.remove("todo");
        break;
    }

    if(promedio == "10" ) {
        var perfecto = "¡Felicidades! Por tu buen desempeño se te hace el 100% de descuento en tu mensualidad. Y no tienes que realizar ningun pago.";
     document.getElementById("res").innerHTML = perfecto;
     document.getElementById("cuadro").classList.remove("negro");
     document.getElementById("cuadro").classList.remove("verde");
     document.getElementById("cuadro").classList.remove("amarillo");
     document.getElementById("cuadro").classList.add("todo");

           
    }

    if(promedio >= 11 ){
        var noCalifica = "El promedio que ingresaste no es valido, por favor verifica la información."
      document.getElementById("res").innerHTML = noCalifica;
      document.getElementById("cuadro").classList.add("negro");
      document.getElementById("cuadro").classList.remove("todo");

    }
}

