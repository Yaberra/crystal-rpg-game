# crystal-rpg-game


Variables
______________________________________________________________________________________________________________________________________-

1. Created  the Global shared wariables that will be called into functions later on in the game.  

2. There are four crystals displayed as buttons on the page.

3. Created an object for all crystals and assigned a name and value starting at 0. 

4. Created a variable to count the players score set to zero.

5. Created a targetNumber variable to display the random target number the player is attempting to match. Set it to zero

6. Created a winsButton to count the number of times the player matched the targetNumber. This is also set to zero. 

7. Created a lossesButton for everytime the player's score went above the targetNumber in which case the player looses a point, set to Zero


Functions: 
______________________________________________________________________________________________________________________________________

1.The player will be shown a random number at the start of the game. 

	*The number will have a value between 19 and 120.

	*There are four crystal buttons that will have a random value, that will not be displayed. 

	*Each time a player loses or wins the crytal buttons reset to a random number between 1 and 12

	*We'll need to create a get random number for the target number and the four crystals. 


Game Overview:
______________________________________________________________________________________________________________________________________


1. The startGame function sets up the game. 

2. Created a reusable function that will pull a random number variable for the target number and crystals between max and min.

3. .The score button will display and add the value of the crytal buttons on click

4. The player clicks the crystal buttons to match the target number if the number goes over the target number displayed the player looses 

5. If the crystal balls clicked add up to equal the target number then the player wins 


Start Game 
______________________________________________________________________________________________________________________________________

* reset the scoreNumber to zero 

*  set the target number score between 19 and 120

*  Reflect the changes in the hml document by preappending to the scoreButton 

* Set the values for purple crystal between 1 and 12
		
* update Reflect the changes in the hml document by preappending to the scoreButton 


_________________________________________________________________________________________________________________________________

Main part of the game:


* First create a function that adds value to scoreButton starts at zero then ++win or ++lose

* To do this pass the crystal object value above as a function for a new add value variable 

* Reflect the changes on the html

* Next we want to create a function that checks for wins and losses 

* Create a checkWin function to see if the player won or lost the game and reset the game to start

* If the player's scored number is greater than the target number the player loses

* If confirm alert and add to the lossesButton -lossesButton++;

* Reflect the updated score in the html 

* Then reset the score button to 0

* If/else	if scoreNumber is equal to target Number alert and add to the winsButton -winsButton ++

* THen startGame function 
 
* Added value to each crystals when they are clicked

* And also reset to startGame 


