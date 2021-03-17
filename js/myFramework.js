// General functions
function getRnd(min, max) {
   var minRnd = min;
   var maxRnd = max - minRnd + 1;
   var rnd1   = Math.floor(Math.random() * maxRnd) + minRnd;
   return rnd1;
}

function pcRamdomNumbers(maxArrLng, maxValueRnd) {
   
   var pcNumbers = [];

   while (pcNumbers.length < maxArrLng) {
      
      var rndNumber = getRnd(1, maxValueRnd);

      if (!pcNumbers.includes(rndNumber)) {

         pcNumbers.push(rndNumber);
      }
   }

   return pcNumbers;
}