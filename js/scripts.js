//back-end bargain bin

//Game object definition
function Game(playerOne, playerTwo, die, endScore){
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.die = die;
  this.endScore = endScore;
  this.turn = true;
}
//
Game.prototype.currentPlayer = function(){
  if (this.turn){
    return this.playerOne;
  } else {
    return this.playerTwo;
  }
}
//Die object definition
function Die(sides){
  this.numSides = sides;
  this.result;
}

Die.prototype.roll = function(){
  this.result = Math.floor(Math.random() * this.numSides) + 1;
  return this.result;
}


function tallyBoard(player, result) {
  if (result === 1) {
    player.turnTally = 0;
    game.turn = !game.turn;
    $("#player-turn").text(game.currentPlayer().id + "'s turn");
  } else {
    player.turnTally += result;
  }
}

function addScore() {
  if (game.turn) {
    $(".player1 p").text(game.playerOne.score);
  } else {
    $(".player2 p").text(game.playerTwo.score);
  }
}

//Player object definition
function Player(playerId){
  this.id = playerId;
  this.score = 0;
  this.turnTally = 0;
}


//GAME SETUP
var endScore = 100;
var playerOne = new Player("Tron");
var playerTwo = new Player("Dripfang");
var pigDie = new Die(6);
var game = new Game(playerOne, playerTwo, pigDie, endScore);

//front-end facsimile
$(document).ready(function(){
  $("#game-start").submit(function(event){
    event.preventDefault();
    //set player names
    playerOne.id = $("#player-one-name").val();
    playerTwo.id = $("#player-two-name").val();
    //set max score
    var goal = parseInt($("#score-goal").val());
    if (goal){
      game.endScore = goal;
    }
    $(".form-container").hide();
    $(".hidden").show();
  })

  $("#player-turn").text(game.currentPlayer().id + "'s turn");
  //when the roll button is clicked
  $("#roll").click(function(){
    var currentPlayer = game.currentPlayer();
    //roll the die
    pigDie.roll();
    //display the result of the roll
    $("#roll-result").text(pigDie.result);
    //add the result of the roll to player tally
    // playerOne.turnTally += pigDie.result;
    tallyBoard(currentPlayer, pigDie.result);
    //display the new total of player's Turn Tally
    $("#tally").text(currentPlayer.turnTally);
    if ( (currentPlayer.turnTally + currentPlayer.score) >= game.endScore) {
      alert("game over, you broke it")
    }
  });

  //when the hold button is clicked
  $("#hold").click(function(){
    //add tally points to current player's score
    var currentPlayer = game.currentPlayer();
    currentPlayer.score += currentPlayer.turnTally;
    addScore();
    currentPlayer.turnTally = 0;
    $("#tally").text(currentPlayer.turnTally);
    //toggle game turn to the other player
    game.turn = !game.turn;
    $("#player-turn").text(game.currentPlayer().id + "'s turn");
  })



});
