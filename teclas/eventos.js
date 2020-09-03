var teclas =
{
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37
};
console.log(teclas);
document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito,x,y,x, y-movimiento,papel);
      y = y-movimiento;
    break
    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x, y+movimiento,papel);
      y = y+movimiento;
    break
    case teclas.LEFT:
      dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
      x = x-movimiento;
    break
    case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
      x = x+movimiento;
    break
  }
  /*
  if (evento.keyCode == teclas.UP)
  {
    dibujarLinea(colorcito,x,y,x, y-movimiento,papel);
    y = y-movimiento;
  }
  if (evento.keyCode == teclas.DOWN)
  {
    dibujarLinea(colorcito,x,y,x, y+movimiento,papel);
    y = y+movimiento;
  }
  if (evento.keyCode == teclas.LEFT)
  {
    dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
    x = x-movimiento;
  }
  if (evento.keyCode == teclas.RIGHT)
  {
    dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
    x = x+movimiento;
  }
  */
}
