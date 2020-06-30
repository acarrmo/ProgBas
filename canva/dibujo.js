var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClic);

var d = document.getElementById('dibujito');
var ancho = d.width;

var lienzo = d.getContext('2d');

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClic(){
  var x = parseInt(texto.value);
  var lineas = x;
  var l=0;
  var yi, xf;
  var espacio = ancho/ lineas;

  /*while(l < lineas)
  {
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea('grey',0, yi, xf, 300);
    console.log("Línea "+l);
    l++;
  }
  */
  for(l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea('grey',0, yi, xf, 300);
    console.log("Línea "+l);
  }


  dibujarLinea('red',1,1,1,300);
  dibujarLinea('red',1,299,299,299);
}
