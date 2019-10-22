//crystal images taken from https://www.rd.com/beauty/healing-crystals/ 

var numToMatch = Math.floor(Math.random() * 101 + 19);
console.log("numToMatch is " + numToMatch);

$("#number-to-match").html(numToMatch);

var crystalNums = [];

for (var i = 0; i < 4; i++) {
    crystalNums[i] = Math.floor(Math.random() * 11 + 1);
    console.log("crystalNums[" + i + "] is " + crystalNums[i]);
}


console.log("crystalNums[0] is " + crystalNums[0]);

$("#crystal1").html("<img class='crystal' src='assets/images/crystal1.jpg' value = " + crystalNums[0] + " />");
$("#crystal2").html("<img class='crystal' src='assets/images/crystal2.jpg' value = " + crystalNums[1] + " />");
$("#crystal3").html("<img class='crystal' src='assets/images/crystal3.jpg' value = " + crystalNums[2] + " />");
 $("#crystal4").html("<img class='crystal' src='assets/images/crystal4.jpg' value = " + crystalNums[3] + " />");

var crystalImg = $(".crystal");
console.log(crystalImg);
crystalImg.append("Is this working?");

crystalImg.on("click", function() {
    alert("The click function is active");

})

// for (var j = 0; j < 4; j++) {
//     crystalImg.attr("value", crystalNums[j]);
// }
