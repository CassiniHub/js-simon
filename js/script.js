// * Un alert() espone 5 numeri generati casualmente.

// * Da li parte un timer di 30 secondi.

// * Dopo 30 secondi l'utente deve inserire, uno alla volta,
// * i numeri che ha visto precedentemente, tramite il prompt().

// * Dopo che sono stati inseriti i 5 numeri, il software dice
// * quanti e quali dei numeri da indovinare sono stati individuati.

var clock;
var sec             = 3;
var rndNumbers      = pcRamdomNumbers(5, 10);
var selectedNumbers = [];
var rightNumbers    = [];


function userNumbers() {

   while (selectedNumbers.length < 5) {
         
      var userNumber = parseInt(prompt("Inserisci uno dei numeri precedentemente visualizzati:"));

      if (!selectedNumbers.includes(userNumber) && userNumber > 0) {

         selectedNumbers.push(userNumber);

         if (rndNumbers.includes(userNumber)) {
            
            rightNumbers.push(userNumber);
         }
      } else {

         console.log("Valore già inserito o non valido");
      }
   }

   return selectedNumbers;
}

function tick() {

   document.getElementById("mainTitle").innerHTML = sec--;

   if (sec < 0) {
      
      clearInterval(clock)
      document.getElementById("mainTitle").innerHTML = "Stop al tempo";

      userNumbers();
      console.log("Hai indovinato " + rightNumbers.length + " numeri.", "I numeri ricordati sono: " + rightNumbers);
   }

}

function init() {
   alert(rndNumbers);

   clock = setInterval(tick, 1000);
}

document.getElementById("btn").addEventListener("click", init);


