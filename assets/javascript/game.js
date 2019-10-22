//crystal images taken from https://www.rd.com/beauty/healing-crystals/ 

var numToMatch = Math.floor(Math.random() * 101 + 19);
console.log("numToMatch is " + numToMatch);

$("#number-to-match").html(numToMatch);

var crystalNums = [];
var totalScore = 0;

//assign random values between 1 and 12 to each of the crystals
for (var i = 0; i < 4; i++) {
    crystalNums[i] = Math.floor(Math.random() * 11 + 1);
    console.log("crystalNums[" + i + "] is " + crystalNums[i]);
}


//send the images of the crystals along with their value to the html

$("#crystal1").html("<img class='crystal' src='assets/images/crystal1.jpg' value = " + crystalNums[0] + " />");
$("#crystal2").html("<img class='crystal' src='assets/images/crystal2.jpg' value = " + crystalNums[1] + " />");
$("#crystal3").html("<img class='crystal' src='assets/images/crystal3.jpg' value = " + crystalNums[2] + " />");
 $("#crystal4").html("<img class='crystal' src='assets/images/crystal4.jpg' value = " + crystalNums[3] + " />");

var crystalImg = $(".crystal");
console.log(crystalImg);
crystalImg.append("Is this working?");

crystalImg.on("click", function() {
    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    console.log("crystalValue is " + crystalValue);

    //adds the value of the crystal clicked to the total score
    totalScore += crystalValue;

    //sends the total score to the html
    $("#total-score").html(totalScore);
    


})

// for (var j = 0; j < 4; j++) {
//     crystalImg.attr("value", crystalNums[j]);
// }
