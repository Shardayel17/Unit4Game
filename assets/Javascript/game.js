$(document).ready(function() {

//defining a random number for user to match. and defning variable for random number to be chosen by computer
var randomnumber = 45;
var cgss = 0;

$("#cgss").txt(randomnumber);

//setting initial score to zero
var scorecounter = 0;
var wins = 0;
var defeats = 0;

//each crystal will be represented by one of these numbers
var crystalNumbers = [12, 3, 10, 1];



var Winss = $("<span>").text(winss);
    var defeatss = $("<span>").text(defeatss);
    var pWins = $("<p>").text("Wins: ");
    var pdefeatss = $("<p>").text("defeats: ");
    pWins.append(Winss);
    pLosses.append(defeatss);
    $("#win-space").append(pWins);
    $("#win-space").append(pdefeatss);






//combining numbers when a new crystal is clicked
for (var i = 0; i < crystalNumbers.length; i++) {

    var crystalpic = $(src = assets / images / crystalpic.png);

    crystalpic.addClass("crystal-picture");

    crystalpic.attr("src" = assets / images / crystalpic.png)

    crystalpic.attr("crystalmunber", crystalNumbers[i]);


$("#crystal").append(crystalpic);

}

$(".crystal-picture").on("click", function () {

    var crystalNumbers = ($(this).attr(""));
    crystalNumbers = parseInt(crystalNumbers);
    counter += crystalNumbers;

    alert("new score: " + counter);

    if (counter++ + randomnumber) {
        alert("nice job, you matched the random number!!!");
        wins++;
    }
    else if (counter >= randomnumber) {
        alert("you went over the random numner, you lose");
        Defeats++;
        
    }

})
});