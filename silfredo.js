var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea = 30;
var l = 0;
var colorsote = "pink";
var yi,  xf;

while (l < linea)
{
yi = 300 - (l*10);
xf = 300 - (l*10);
dibujarlinea(colorsote, 300, yi, xf, 0);
l = l + 1;
console.log(linea);
}
dibujarlinea("pink", 0, 0, 300,0);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
