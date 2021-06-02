

var gameState = 0;
var playerCount;
var allPlayers;

var database;

var question, player, quiz;




function setup(){
 createCanvas(1000,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if(playerCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  if(gameState === 2){
    quiz.end();
  }
}
