class billete
{
  constructor(v,c)
  {
    this.valor=v;
    this.cantidad=c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var imagenes = [];
imagenes["10"] = "billete10.png";
imagenes["20"] = "billete20.png";
imagenes["50"] = "billete50.png";

var caja = [];
caja.push( new billete(10, 15) );
caja.push( new billete(20, 15) );
caja.push( new billete(50, 10) );

var entregado = [];

var dinero;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById('Retirar');
b.addEventListener("click",EntregarDinero);

var cantidad = document.getElementById("cantidad");
//cantidad.addEventListener("click", existencia);

function EntregarDinero()
{
  resultado.innerHTML = "";
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for(var b of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / b.valor);

      if(div > b.cantidad)
      {
        papeles = b.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new billete(b.valor, papeles));
      dinero = dinero - (b.valor * papeles);

      b.cantidad -= papeles;

    }
  }
      if(dinero>0)
      {
        resultado.innerHTML = "No puedo darte esa cantidad :(";
      }
      else
      {
        resultado.innerHTML += "<p>Retiraste:<br /></p>";

        for(var e of entregado)
        {
          if(e.cantidad > 0)
          {
            for(var bi = 1; bi <= e.cantidad ;bi++)
            {
              resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br /><hr />";
            }
          }
        }
      }
}

function existencia()
{
  var total = 0;

  for(var bi of caja)
  {
    total += bi.valor * bi.cantidad;
  }
  alert("La cantidad actual de dinero es de " + total + "$COP");
}
