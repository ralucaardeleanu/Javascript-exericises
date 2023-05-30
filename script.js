//IF ELSE
//Dacă ai luat cel puțin 22 de puncte la sală și sub 21 de puncte de penalizare la examen, ai luat carnetul auto, altfel ai picat.

// console.log(
//   "1.Dacă ai luat cel puțin 22 de puncte la sală și sub 21 de puncte de penalizare la examen, ai luat carnetul auto, altfel ai picat. Valori: permisAuto(20, 29);"
// );
// function permisAuto(ps, pp) {
//   if (ps >= 22 && pp < 21) {
//     console.log("Ai luat permisul");
//   } else {
//     console.log("Nu ai luat permisul");
//   }
// }

// permisAuto(20, 29);

//Dorim sa afisam un mesaj cutomizat, in functie de nota obtinuta. Daca nota e mai mare de 9, afisam "Nota mare!". Daca ai luat nota mai mare de 8, afisam "Nota buna!". Daca ai luat nota mai mare de 5, afisam "Ai trecut!". Altfel, asisam "Mai incearca.".

// console.log(
//   "2.Dorim sa afisam un mesaj cutomizat, in functie de nota obtinuta. Daca nota e mai mare de 9, afisam 'Nota mare!'. Daca ai luat nota mai mare de 8, afisam 'Nota buna!'. Daca ai luat nota mai mare de 5, afisam 'Ai trecut!. Altfel, asisam 'Mai incearca.'. Valori: calculNota(7.7);"
// );
// function calculNota(nota) {
//   if (nota >= 9 && nota <= 10) {
//     console.log("Nota mare!");
//   } else if (nota >= 8 && nota < 9) {
//     console.log("Nota buna!");
//   } else if (nota >= 5 && nota < 8) {
//     console.log("Ai trecut");
//   } else {
//     console.log("Mai incearca!");
//   }
// }
// calculNota(7.7);

//FizzBuzz
// Se da un numar.
// Daca numarul e divizibil cu 3 afiseaza "Fizz".
// Daca numarul e divizibil cu 5 afiseaza "Buzz".
// Daca numarul e divizibil si cu 3 si cu 5 afiseaza "FizzBuzz".
// console.log("3.FizzBuzz Valori: nr=15");
// function calculFizzBuzz(nr) {
//   if (nr % 3 == 0 && nr % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (nr % 3 == 0) {
//     console.log("Fizz");
//   } else if (nr % 5 == 0) {
//     console.log("Buzz");
//   } else console.log("Nu este divizibil");
// }

// calculFizzBuzz(15);

// SWITCH
// Se da o variabila care reprezinta o codificare pentru rezultatul unui meci de fotbal.
// Daca are valoarea '1', gazdele au castigat.
// Daca are valoarea 'X', este egalitate.
// Daca are valoare '2', oaspetii au castigat.
// Orice alta valoare este invalida.
// var valoare = 1;
// {
//   switch (valoare) {
//     case "X":
//       console.log("Egalitate");
//     case 1:
//       console.log("Gazdele au castigat!");

//     case 2:
//       console.log("Oaspetii au castigat!");
//       break;
//     default:
//       console.log("Valoare Invalida");
//   }
// }
//Dacă ai luat cel puțin 22 de puncte la sală și sub 21 de puncte de penalizare la examen, ai luat carnetul auto, altfel ai picat.

function permisAuto2() {
  var text;
  var puncteSala = document.getElementById("myInputSala").value;
  var punctePermis = document.getElementById("myInputPermis").value;
  if (puncteSala >= 22 && punctePermis < 21) {
    text = "Ai luat permisul";
  } else {
    text = "Nu ai luat permisul";
  }
  document.getElementById("permisId").innerHTML = text;
}
//Dorim sa afisam un mesaj cutomizat, in functie de nota obtinuta. Daca nota e mai mare de 9, afisam "Nota mare!". Daca ai luat nota mai mare de 8, afisam "Nota buna!". Daca ai luat nota mai mare de 5, afisam "Ai trecut!". Altfel, asisam "Mai incearca.".
function calculNota2() {
  var text;
  var nota = document.getElementById("myInputNota").value;
  if (nota >= 9 && nota <= 10) {
    text = "Nota mare!";
  } else if (nota >= 8 && nota < 9) {
    text = "Nota buna!";
  } else if (nota >= 5 && nota < 8) {
    text = "Ai trecut";
  } else {
    text = "Mai incearca!";
  }
  document.getElementById("notaId").innerHTML = text;
}

//FizzBuzz
// Se da un numar.
// Daca numarul e divizibil cu 3 afiseaza "Fizz".
// Daca numarul e divizibil cu 5 afiseaza "Buzz".
// Daca numarul e divizibil si cu 3 si cu 5 afiseaza "FizzBuzz".

function calculFizzBuzz2() {
  var text;
  var nr = document.getElementById("myInputNumber").value;
  if (nr % 3 == 0 && nr % 5 == 0) {
    text = "FizzBuzz";
  } else if (nr % 3 == 0) {
    text = "Fizz";
  } else if (nr % 5 == 0) {
    text = "Buzz";
  } else text = "Nu este divizibil";

  document.getElementById("numberId").innerHTML = text;
}

// SWITCH
// Se da o variabila care reprezinta o codificare pentru rezultatul unui meci de fotbal.
// Daca are valoarea '1', gazdele au castigat.
// Daca are valoarea 'X', este egalitate.
// Daca are valoare '2', oaspetii au castigat.
// Orice alta valoare este invalida.

function calculMeci() {
  var text;
  var valoare = document.getElementById("myInputValue").value;
  switch (valoare) {
    case "X":
      text = "Egalitate";
      break;
    case "1":
      text = "Gazdele au castigat!";
      break;

    case "2":
      text = "Oaspetii au castigat!";
      break;
    default:
      text = "Valoare Invalida";
  }
  document.getElementById("valueId").innerHTML = text;
}

// 1. Print the numbers from 0 to 15.

function print1() {
  for (var i = 0; i <= 15; i++) {
    document.getElementById("paragraph1").innerHTML = i + " ";
  }
}
// La un hotel pentru animale:

var numberOfDogs = 12;
var numberOfCats = 5;
var numberOfEmployees = 3;

// Implementati urmatoarele functii:

// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare
function dogsNumber() {
  if (numberOfDogs <= 15) {
    console.log("Mai sunt loucri disponibile");
  } else {
    console.log("Nu mai sunt loucri disponibile");
  }
}
dogsNumber();

// b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat
var nrAnimale = numberOfCats + numberOfDogs;
function capacitateMaximaHotel() {
  if (nrAnimale <= 30) {
    console.log("Mai sunt loucri disponibile");
  } else {
    console.log("Nu mai sunt loucri disponibile");
  }
}

capacitateMaximaHotel();

// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.

var nrJucariiPisica = numberOfCats * 3;
var nrJucariiCaini = numberOfDogs * 5;

function calculJucarii() {
  var totalJucarii = nrJucariiCaini + nrJucariiPisica;
  console.log("nr total de jucarii", totalJucarii);
}
calculJucarii();
// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare
function stareAnimale() {
  if (nrAnimale <= 20 && numberOfEmployees >= 5) {
    console.log("animalele sunt bine ingrijite");
  } else {
    console.log("animalele nu sunt bine ingrijite");
  }
}
stareAnimale();
// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.
var luckyNumber = 7;
var nrFiinte = nrAnimale + numberOfEmployees + 1;
function bonus() {
  if (nrFiinte % 7 == 0) {
    var money = numberOfEmployees * 100;
    console.log("Bonusul total este de: ", money);
  }
}
bonus();
// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"

function paritateSi() {
  if (numberOfCats % 2 !== 0 && numberOfDogs % 2 !== 0) {
    console.log("Paritate SI");
  } else {
    console.log("NeParitate SI");
  }
}

paritateSi();

// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"

function paritateSau() {
  if (numberOfCats % 2 !== 0 || numberOfDogs % 2 !== 0) {
    console.log("Paritate SAU");
  } else {
    console.log("NeParitate SAU");
  }
}

paritateSau();
