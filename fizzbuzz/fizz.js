var numeros = 100;
var divisible = false;

function esDivisible(numero, divisor)
{
  if(numero % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

for(var i = 1; i <=100; i++)
{
//  divisible = false;
  if(esDivisible(i,3))
  {
    document.write("Fizz");
//    divisible = true;
  }
  if(esDivisible(i,5))
  {
    document.write("Buzz");
//    divisible = true;
  }
  if(!esDivisible(i,3) && !esDivisible(i,5))
  //if(i%3 !=0 && i%5 !=0)
  //if(!divisible)
  {
    document.write(i);
  }
  document.write("<br />");
}
