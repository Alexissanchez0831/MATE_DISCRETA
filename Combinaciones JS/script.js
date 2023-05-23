function combinar() {
  var input = document.getElementById("elements").value;
  var elementos = input.split(",");
  var combinations = [];

  generarCombinaciones(elementos, [], combinations);

  var combinationsList = document.getElementById("combinations");
  combinationsList.innerHTML = "";

  for (var i = 0; i < combinations.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = combinations[i].join(" ");
    combinationsList.appendChild(listItem);
  }
}

function generarCombinaciones(elementos, combinacionActual, combinations) {
  if (combinacionActual.length === elementos.length) {
    combinations.push(combinacionActual.slice());
  } else {
    for (var i = 0; i < elementos.length; i++) {
      if (combinacionActual.indexOf(elementos[i]) === -1) {
        combinacionActual.push(elementos[i]);
        generarCombinaciones(elementos, combinacionActual, combinations);
        combinacionActual.pop();
      }
    }
  }
}
