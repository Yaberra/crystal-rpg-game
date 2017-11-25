$(document).ready(function() {


// Variables 
// ---------------------------------------------------------------------------------------------------------------

var crystal = {

purple:

{
 	name:"purple",
 	value:0 
},


pink:

{
	name:"pink",
 	value:0 

},


brown:

{	
	name:"brown",
	value:0 

},


red:	

{

	name:"red",
 	value:0 

},

};

var scoreNumber = 0

var targetNumber = 0

var wins = 0

var losses = 0



Functions: 

var getRandomNumber = function(min, max) {
	
	return Math.floor(Math.random() * (max - min +1)) + min;

	console.log(getRandomNumber);



}

var startGame = function(){

// reset the scoreNumber for the person playing 

var scoreNumber = 0

$("#scoreButton").prepend(scoreNumber);

// reset the targetNumber the player is trying to achieve  between 19 and 120

targetNumber = getRandomNumber(19,120);

console.log(targetNumber);

$("#targetNumber").prepend(targetNumber);



// set different values for each of the crystals between 1 and 12

crystal.purple.value = getRandomNumber(1,12);

crystal.pink.value = 	getRandomNumber(1,12);

crystal.brown.value = getRandomNumber(1,12);

crystal.red.value = getRandomNumber(1,12);



$("scoreButton").html(scoreNumber);

console.log("Target Number: " + targetNumber);                     


console.log("purple:"  + crystal.purple.value);

console.log("pink: " + crystal.pink.value);

console.log("brown: " + crystal.brown.value);

console.log("red: " + crystal.red.value); 

};


$('#purple').click(function() {

   alert ("test");


});


$('#pink').click(function() {

   alert ("test");
});


$('#brown').click(function() {

   alert ("test");
});

$('#red').click(function() {

   alert ("test");
});

startGame();














});

	// pinkButton: {
					// name: "pinkButton",
					// value: 0

// },

	// brownButton: {
					// name: "brownButton",
					// value: 0

// },


	// redButton: {
				
					// name: "redButton",
					// value: 0

// },

// }

// variable to keep track of scores: 

// var scoreButton = 0 ;

// var targetNumber = 0 ;

// variable to track wins and losses 

// var winsButton = 0 ;

// var lossesButton = 0 ;



// Functions 
// -----------------------------------------------------------------------------------------------------------------

// When random-button is clicked...

      // $("#random-button").on("click", function() {

        // Create a string which will hold the target number
        // var targetNumber = "";

        // Then initiate a loop to generate 9 separate numbers
        // for (var i = 0; i < 34; i++) {

          // For each iteration, generate a new random number between 1 and 9.
          // var random = Math.floor(Math.random() * numberArray.length) + 1;

          // Take this number and then add it to the rest of the string.
          // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
          // targetNumber = random + targetNumber;

        // }

        // Once we have our final lotto number, we'll prepend it to the top of our random-number div.
        // $("#randomNumber").prepend("<br><hr>" + targetNumber);

        // console.log(targetNumber)

      // });

    // });

// Game 
// --------------------------------------------------------------------------------------------------------------------------


// $("#randomButton").on ("click", function(){

 // var randomButton = Math.floor(Math.random (i) * numberArray.length);
 	
 // console.log(randomButton);

// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.

// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12. 

// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// our game will hide this amount until the player clicks a crystal.

// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

 // The app should show the number of games the player wins and loses.

 // To that end, do not refresh the page as a means to restart the game.

