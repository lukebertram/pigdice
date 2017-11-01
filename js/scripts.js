//back-end bargain bin

//Die object definition
function Die(sides){
  this.numSides = sides;
  this.result;
}

Die.prototype.roll = function(){
  this.result = Math.floor(Math.random() * this.numSides) + 1;
  return this.result;
}

function talleyBoard(player, result) {
  if (result === 1) {
    player.turnTally = 0;
  } else {
    player.turnTally += result;
  }
}

//Player object definition
function Player(playerId){
  this.id = playerId;
  this.score = 0;
  this.turnTally = 0;
}

var playerOne = new Player("Tron");
var pigDie = new Die(6);
//front-end facsimile
$(document).ready(function(){

  //when the roll button is clicked
  $("#roll").click(function(){
    //roll the die
    pigDie.roll();
    //display the result of the roll
    $("#roll-result").text(pigDie.result);
    //add the result of the roll to player tally
    // playerOne.turnTally += pigDie.result;
    talleyBoard(playerOne, pigDie.result);
    //display the new total of player's Turn Tally
    $("#tally").text(playerOne.turnTally);
  });



});
