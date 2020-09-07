//var z;
//for(var i=0; i<10; i++)
//{
//  var z = aleatorio(-5,5);
//  document.write(z +", ");
//}

var vp =  document.getElementById("villaplatzi");
document.addEventListener("keydown",moverVaca);
var papel = vp.getContext("2d");
var xVaca = 200;
var yVaca = 200;
var xCerdo = 150;
var yCerdo = 150;
var xPollo = 270;
var yPollo = 270;
var teclas =
{
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37
};

var fondo={
  url:"tile.png",
  cargaOK:false
};
var vaca ={ //definición de JSON
  url:"vaca.png",
  cargaOK:false,
  posX:225,
  posY:225
};
var cerdo ={
  url:"cerdo.png",
  cargaOK:false
};
var pollo ={
  url:"pollo.png",
  cargaOK:false
};
/*
vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load",cargarVaca);
*/
//moverAnimal(vaca.url, 149, 149, 151, 151, papel);
/*dibujarLinea("red", 149, 149, 151, 151, papel);


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
*/
/*
function moverAnimal(animal, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = animal;
  //lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  papel.drawImage(vaca.url,x,y);
  //lienzo.stroke();
  lienzo.closePath();
}*/


function moverVaca(evento)
{
  //var colorcito = "blue";
  //var animalito = vaca.url;
  var movimiento = 20;

  switch (evento.keyCode)
  {
    case teclas.UP:
    //dibujarLinea(colorcito,x,y,x, y-movimiento,papel);
    yVaca = yVaca-movimiento;
    permanecer();
    dibujar();
    break

    case teclas.DOWN:
    yVaca = yVaca+movimiento;
    permanecer();
    dibujar();
    //dibujarLinea(colorcito,x,y,x, y+movimiento,papel);
    break

    case teclas.LEFT:
    xVaca = xVaca-movimiento;
    permanecer();
    dibujar();
    //dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
    break

    case teclas.RIGHT:
    //dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
    xVaca = xVaca+movimiento;
    permanecer();
    dibujar();
    break
  }
}

fondo.objeto = new Image(); //se crea un objeto, definición del objeto Image, y una nueva definición de objeto Image guarado en fondo
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load",cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load",cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load",cargarCerdo);

function cargarFondo()
{
  fondo.cargaOK=true;
  permanecer();
}

function cargarVaca()
{
  vaca.cargaOK=true;
  permanecer();
}

function cargarCerdo()
{
  cerdo.cargaOK=true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK=true;
  dibujar();
}

function permanecer()
{
  if(fondo.cargaOK==true)
  {
    papel.drawImage(fondo.objeto,0,0);
  }

  if(vaca.cargaOK==true)
  {
    papel.drawImage(vaca.objeto, xVaca, yVaca);
  }

  if(pollo.cargaOK==true)
  {
    papel.drawImage(pollo.objeto, xPollo, yPollo);
  }

  if(cerdo.cargaOK==true)
  {
    papel.drawImage(cerdo.objeto, xCerdo, yCerdo);
  }

}

var cantidad = aleatorio(2,15);

function dibujar()
{
  if(cerdo.cargaOK==true)
  {
    for (var c=0; c<cantidad; c++)
    {
      var xCerdo = aleatorio(0,10);
      var yCerdo = aleatorio(0,10);
      var xCerdo = xCerdo * 40;
      var yCerdo = yCerdo * 40;
      papel.drawImage(cerdo.objeto,xCerdo,yCerdo);
    }
  }

  if(pollo.cargaOK==true)
  {
    for (var p=0; p<cantidad; p++)
    {
      var xPollo = aleatorio(0,10);
      var yPollo = aleatorio(0,10);
      var xPollo = xPollo * 40;
      var yPollo = yPollo * 40;
      papel.drawImage(pollo.objeto,xPollo,yPollo);
    }
  }
}

function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(((max-min+1)*Math.random())+min);
  return resultado;
}
