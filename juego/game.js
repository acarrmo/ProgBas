var imagenes = [];
imagenes["Planetoid"] = "vaca.png";
imagenes["Asteroid"] = "pollo.png";
imagenes["Nebuloid"] = "cerdo.png";

/* Esto es lo mismo que el array de arriba. Un array asociativo es un objeto literal.
var imagenes =
{
  Planetoid: "vaca.png",
  Asteroid: "pollo.png",
  Nebuloid: "cerdo.png"
}
*/
/* Código inicial. Se coloca dentro de array en el código de abajo
var planetoid = new Aldebariano("Planetoid", 100, 30);
var asteroid = new Aldebariano("Asteroid", 80, 50);
var nebuloid = new Aldebariano("Nebuloid", 130, 40);
*/
var coleccion = [];
coleccion.push(new Aldebariano("Planetoid", 100, 30));
coleccion.push(new Aldebariano("Asteroid", 80, 50));
coleccion.push(new Aldebariano("Nebuloid", 130, 40));

for (var elemento of coleccion)
{
  elemento.mostrar();
}
/*
asteroid.mostrar();
planetoid.mostrar();
nebuloid.mostrar();
*/

//asteroid.hablar();
