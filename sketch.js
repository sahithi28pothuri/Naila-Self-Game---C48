var form;
var gameState= 0;
var database;
var points=0;
var score=0;
var seconds = 0;
var flag = false;
var startButton;
var playerCount;
var player;
var endImg;

function preload(){
  back_img = loadImage("images/image main shinchan.jpg")
  endImg = loadImage("images/image end 2.jpg");
}
function setup() {
  createCanvas(1250,590);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
 if(playerCount===1){
    game.update(1)
 }

 if(gameState===1){
  game.play()
 }
  
}

