var d = document.getElementById('dibujito');
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
  dibujarLinea('grey',0, yi, xf, 300);
  console.log("Línea "+l);
}


dibujarLinea('red',1,1,1,300);
dibujarLinea('red',1,299,299,299);
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}
