//back-end bargain bin
function Die(sides){
  this.numSides = sides;
  this.result;
}

Die.prototype.roll = function(){
  this.result = Math.floor(Math.random() * this.numSides) + 1;
  return this.result;
}

function getRandInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


var pigDie = new Die(6);
//front-end facsimile
$(document).ready(function(){

  //when the roll button is clicked
  $("#roll").click(function(){
    //roll the die
    pigDie.roll();
    //display the result of the roll
    $(".tally-display h1").text(pigDie.result);
  });



});
