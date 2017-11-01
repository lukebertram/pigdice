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

//clear displayed scores and player turn name
var clearScores = function(){
  $("#roll-result").text("");
  $("#tally").text("");
  $(".player1 p").text("000");
  $(".player2 p").text("000");
  $("#player-turn").text("");
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
    var p1 = $("#player-one-name").val();
    var p2 = $("#player-two-name").val();
    if (p1 !== ""){
      playerOne.id = p1;
      $("#p1-name-board").text(p1);
    }
    if (p2 !== ""){
      playerTwo.id = p2;
      $("#p2-name-board").text(p2);
    }
    //set max score
    var goal = parseInt($("#score-goal").val());
    if (goal){
      game.endScore = goal;
    }
    $(".form-container").hide();
    $(".hidden").show();
    playerOne.score = 0;
    playerTwo.score = 0;
    playerOne.turnTally = 0;
    playerTwo.turnTally = 0;
    clearScores();
    $("#player-turn").text(game.currentPlayer().id + "'s turn");
  })

  // $("#player-turn").text(game.currentPlayer().id + "'s turn");
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
      //show end screen
      $(".end-screen h1").text(game.currentPlayer().id + " is the winner!");
      $(".end-screen").show();
      $(".hidden").hide();
    }
  });

  //when the replay button is clicked after a game has concluded
  $("#replay").click(function(){

    $(".form-container").show();
    $(".end-screen").hide();

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
