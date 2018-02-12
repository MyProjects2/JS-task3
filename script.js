'use strict'
var userInput = prompt('Напишите любое слово');
function calculateVowels(string) {
    var arrayOfVowels = string.match( /[аеёиоуэюя]/gi );
    var amount = arrayOfVowels.length;
    return amount;
}
console.log('Количество гласных букв в слове(фразе): ' + calculateVowels(userInput));
























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
