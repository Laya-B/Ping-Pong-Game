var ball
var table
var net
var player1
var player2
var player1Score = 0
var player2Score = 0
var database
var edges
var players = 0
var player
var playerCount = 0
var allPlayers
var form, playerCount
var PLAY = 1
var WAIT = 0
var gameState = WAIT
var ballPositionX
var ballPositionY

function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 100, 25, 25);
  net = createSprite(400, 250, 25, 50)
  database = firebase.database()
  edges = createEdgeSprites()
  game = new Game();
  game.getState();
  game.gameStarts();
}

function draw() {
  background(255,255,255);  
  

  if (playerCount == 2) {
    gameState = 1
    game.update(1)
    player.update(1)
  }
  if (gameState == 1){
    game.gamePlay()
  }

  drawSprites();
}



