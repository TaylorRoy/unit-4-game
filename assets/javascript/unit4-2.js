//!!!!!!!!!!!!!!!!!!!!!!!!!!GLOBAL VARIABLES AND FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!

var win = 0;

var lose = 0;

var randomNumber = [1, 4, 8, 10];

//var randomNumber = crystalValueArray[(Math.floor(Math.random() *4))] 

//between 19-120
var targetScore = 55;

var yourScore = 0;

//attaches value of var targetScore to html element with id = target-score
$("#target-score").text("Target Score: " + targetScore);

//attaches value of var win to id= wins in html
$("#wins").text("Wins: " + win);

//attaches value of var lose to html element with id = losses
$("#losses").text("Losses: " + lose);

$("#your-score").text("Your Score: " + yourScore);

//reset game after win or lose condition is met
function reset() {
    yourScore = 0;

};


 //iterating through randomNumber 
 for (var i = 0; i < randomNumber.length; i++) {

    //creates a new img element in html dom
    var imageCrystal = $("<img>");

    //gives new img element a class
    imageCrystal.addClass("crystal-image");

    //  //gives imageCrystal a src link to the crystal image
    imageCrystal.attr("src", "./assets/images/crystal.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", randomNumber[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#row2display").append(imageCrystal);
  }

  $(".crystal-image").on("click", function () {

    //setting crystalValue = to the data-value attached to the particular image when clicked.  This is a STRING!!!
    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    //changing crystalValue from string to NUMBER
    crystalValue = parseInt(crystalValue);
    
    //adding crystalValue to yourScore
    yourScore += crystalValue;
    
    $("#your-score").text("Your Score: " + yourScore);

    //conditions of scoring and displaying win or lose in html div win-lose-area
    if (yourScore === targetScore) {
        win++;
        alert("you won");
        $("win-lose-area").text("You won!");
        $("#wins").text("Wins: " + win);
        reset();
    }
    else if (yourScore > targetScore) {
        lose++;
        alert("you lost");
        $("#win-lose-area").text("You Lost!");
        $("#losses").text("Losses: " + lose);
        reset();
        
    }

});