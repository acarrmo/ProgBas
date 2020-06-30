var teclas =
{
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37
};
console.log(teclas);
document.addEventListener("keyup",dibujarTeclado);

function dibujarTeclado(evento)
{
  if (evento.keyCode == teclas.UP)
  {
    console.log("Arriba")
  }
  if (evento.keyCode == teclas.DOWN)
  {
    console.log("Abajo")
  }
  if (evento.keyCode == teclas.LEFT)
  {
    console.log("Izquierda")
  }
  if (evento.keyCode == teclas.RIGHT)
  {
    console.log("Derecha")
  }
}
