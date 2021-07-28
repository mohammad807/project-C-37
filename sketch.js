var canva , backgroundImg

var gameState = 0
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestants, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  
}
