//crystal images taken from https://www.rd.com/beauty/healing-crystals/ 

var numToMatch = Math.floor(Math.random() * 101 + 19);
console.log("numToMatch is " + numToMatch);

$("#number-to-match").html(numToMatch);

var crystalNums = [];

for(var i=0; i<4; i++){
    crystalNums[i] = Math.floor(Math.random() * 11 + 1);
    console.log("crystalNums[" + i + "] is " + crystalNums[i]);
}

$("#crystal1").html("<img class='crystal' src='assets/images/bluecrystal.jpg' />");
$("#crystal2").html("<img class='crystal' src='assets/images/greencrystal.jpg' />");
$("#crystal3").html("<img class='crystal' src='assets/images/pinkcrystal.jpg' />");
$("#crystal4").html("<img class='crystal' src='assets/images/redorangecrystal.jpg' />");