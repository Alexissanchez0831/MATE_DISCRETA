function lanzarDado() {
  // Generar un número aleatorio entre 1 y 6 simulando el lanzamiento de un dado
  var numero = Math.floor(Math.random() * 6) + 1;

  // Verificar si el número obtenido es par
  var esPar = numero % 2 === 0;

  // Calcular la probabilidad de obtener un número par
  var probabilidad = esPar ? 1 / 2 : 1 / 2;

  // Mostrar el resultado en la página
  var resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = "Número obtenido: " + numero + "<br>";
  resultadoElemento.innerHTML += "¿Es par? " + esPar + "<br>";
  resultadoElemento.innerHTML += "Probabilidad de obtener un número par: " + probabilidad;
}
