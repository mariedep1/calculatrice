// Permet de remmetre à zera la calculatrice 
function forclear() {
  document.getElementById("output").innerHTML = "0";
}

// Permet d'enlever l'affichage du 0 lors d'un calcul 
function removeZero() {
  var value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = " ";
    document.getElementById("output").innerHTML = value;
  }
} 

// Permet de calculer un pourcentage
function perc() {
  var value = document.getElementById("output".innerHTML);
  value = value / 100;
  document.getElementById("output") = value;
}

// Permet d'ajouter au calcul le nombre choisi lors du clic 
function fordisplay(myvalue) {
  removeZero();
  document.getElementById("output").innerHTML += myvalue;
}

// Permet de calculer 
function solve() {
  removeZero();
  var equation = document.getElementById("output").innerHTML;
  var solved = eval(equation);
  document.getElementById("output").innerHTML = solved;
}
