var d = document.getElementById('dibujito_reto');
var lienzo = d.getContext('2d');
var lineas = 30;
var l=0;
var yi, xf;

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
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea('pink',300, yi, xf, 0);
  console.log("Línea "+l);
}


dibujarLinea('pink',300,1,1,1);
dibujarLinea('pink',299,299,299,1);
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
