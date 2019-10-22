//crystal images taken from https://www.rd.com/beauty/healing-crystals/ 

var numToMatch;



var crystalNums = [];
var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;

startGame();



var crystalImg = $(".crystal");
console.log(crystalImg);




// for (var j = 0; j < 4; j++) {
//     crystalImg.attr("value", crystalNums[j]);
// }

function startGame() {
    numToMatch = Math.floor(Math.random() * 101 + 19);

    console.log("numToMatch is " + numToMatch);

    //assign random values between 1 and 12 to each of the crystals
    for (var i = 0; i < 4; i++) {
        crystalNums[i] = Math.floor(Math.random() * 11 + 1);
        console.log("crystalNums[" + i + "] is " + crystalNums[i]);
    }

    $("#number-to-match").html(numToMatch);

    //send the images of the crystals along with their value to the html

    $("#crystal1").html("<img class='crystal' src='assets/images/crystal1.jpg' value = " + crystalNums[0] + " />");
    $("#crystal2").html("<img class='crystal' src='assets/images/crystal2.jpg' value = " + crystalNums[1] + " />");
    $("#crystal3").html("<img class='crystal' src='assets/images/crystal3.jpg' value = " + crystalNums[2] + " />");
    $("#crystal4").html("<img class='crystal' src='assets/images/crystal4.jpg' value = " + crystalNums[3] + " />");


    $(".crystal").on("click", function () {
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        console.log("crystalValue is " + crystalValue);
    
        //adds the value of the crystal clicked to the total score
        totalScore += crystalValue;
    
    
        //user wins if the totalScore is equal to numToMatch
    
        if (totalScore == numToMatch) {
            alert("You won!");
            totalWins++;
            $("#wins").html(totalWins);
            totalScore = 0;
    
            $("#total-score").html(totalScore);
            startGame();
        }
        //user loses if totalScore goes over numToMatch
        else if (totalScore >= numToMatch) {
            alert("You lost!");
            totalLosses++;
            $("#losses").html(totalLosses);
            totalScore = 0;
            $("#total-score").html(totalScore);
            startGame();
        }
        else {
            //sends the total score to the html
            $("#total-score").html(totalScore);
        }
    
    
    })
    



}