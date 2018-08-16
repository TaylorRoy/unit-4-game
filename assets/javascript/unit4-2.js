//!!!!!!!!!!!!!!!!!!!!!!!!!!GLOBAL VARIABLES AND FUNCTIONS!!!!!!!!!!!!!!!!!!!!!!!!!

var win = 0;

var lose = 0;

//values that will be attached to each crystal
var crystalValueArray = [1, 4, 8, 10];

//declare here to fill with random values from shuffleArray(crystalValueArray) below
var randomCrystalValueArray = [];

var imageArray = ["./assets/images/crystal.jpg", "./assets/images/crystal2.jpg", "./assets/images/crystal3.jpg", "./assets/images/crystal4.jpg"];

var randomImageArray = [];

//crystalValueArray[(Math.floor(Math.random() *4))] 

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


//use Durstenfeld shuffle function to randomize crystalValueArray
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        
        array[i] = array[j];
        array[j] = temp;
    }
    //set array in function to empty randomCrystalValueArray
    randomCrystalValueArray = array
};

//call shuffleArray function with crystalValueArray 
shuffleArray(crystalValueArray);

//use Durstenfeld shuffle function to randomize imageArray
function shuffleImageArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        
        array[i] = array[j];
        array[j] = temp;
    }
    //set array in function to empty randomCrystalValueArray
    randomImageArray = array
};

//call shuffleArray function with crystalValueArray 
shuffleImageArray(imageArray);

//reset game after win or lose condition is met
function reset() {
    yourScore = 0;
    randomCrystalValueArray = [];
    randomImageArray = [];
};


 //iterating through randomNumber 
 for (var i = 0; i < randomCrystalValueArray.length; i++) {

    //creates a new img element in html dom
    var imageCrystal = $("<img>");

    //gives new img element a class
    imageCrystal.addClass("crystal-image");

    //  //gives imageCrystal a src link to the crystal image
    imageCrystal.attr("src", randomImageArray[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", crystalValueArray[i]);

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