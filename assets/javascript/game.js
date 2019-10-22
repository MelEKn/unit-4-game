//crystal images taken from https://www.rd.com/beauty/healing-crystals/ 

var numToMatch = Math.floor(Math.random() * 101 + 19);
console.log("numToMatch is " + numToMatch);

$("#number-to-match").html(numToMatch);

var crystalNums = [];

for(var i=0; i<4; i++){
    crystalNums[i] = Math.floor(Math.random() * 11 + 1);
    console.log("crystalNums[" + i + "] is " + crystalNums[i]);
}