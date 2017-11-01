# Pig Dice

### A Marston Bertram Joint

# Basic Operation Flowchart

  Start button - press to show player name entry, max - score form.

  submit names and score to play to. game commences

  randomly determine first player turn

  first player turn starts, two buttons available:
  * roll button - initiates a random roll  
    * if roll > 1 - add value of roll to player's turn tally
    * if roll = 1 - bust - player's turn tally is set to 0, and player's turn ends.


  * quit button - ends current turn and adds current value of turn tally to player's score total

If player score >= scoreGoal, game ends and displays winner screen along with an button to start a new game/play again.

# Specifications

Define a die object with a "roll" method that returns a random number between 1 and 6. Press a button to call roll method and receive a random number between 1 and 6.  
* Input: press "roll die" button
* Output: a random number between 1 and 6 displayed onscreen

Has a player object that contains a running tally of this turn's points and display this tally onscreen during the player's turn.
* Input: visit page
* Output: displays current player's tally and roll die button.

Adds result of die roll to a running tally - which is displayed onscreen
* Input: "roll die" - 1
* Output: show die result and add result to displayed tally - tally increased from 0 to 1

On a roll of 1, running tally is reduced back to 0
* Input: "roll die" - 1
* Output: show die result and set tally value to 0

Turns - implement a game model to track turns, players, score totals
* Input:
* Output:

On a roll of 1, switch player turns
* Input: "roll die" - 1
* Output: Toggle game.turn, set current player's turn tally to 0
