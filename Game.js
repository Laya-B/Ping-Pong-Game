class Game {
    constructor(){
      this.ballPositionX = 0
      this.ballPositionY = 0
    }
    
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    } 
    
    update(state) {
        database.ref("/").update({
            gameState: state
        });
    }

    gameStarts() {
        player = new Player();
        playerCount = player.getCount();

        form = new Form();
        form.display();

        player1 = createSprite(50, 200, 25, 75)
        player2 = createSprite(750, 200, 25, 75)

        players = [player1, player2];

        Player.getPlayersInfo()

        table = createSprite(400, 300, 600, 50)
    }

    gamePlay (){
        if (keyDown(UP_ARROW)) {
          players[index-1].y -= 5
        }
          if (keyDown(DOWN_ARROW)) {
          players[index-1].y += 5
        }
      
        ball.bounceOff(table)
        ball.bounceOff(player1)
        ball.bounceOff(player2)
      
        ball.velocityX = -5
        ball.velocityY = 5
      

        if (ball.isTouching(net) && ball.positionX>400){
            player1Score += 1
        }
        if (ball.isTouching(net) && ball.positionX<400){
            player2Score += 1
        }

        ball.readBallPosition()
        ball.updateBallPosition()
    }

    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
  
      //C39
      this.resetTitle.html("Reset Game");
      this.resetTitle.class("resetText");
      this.resetTitle.position(width / 2 + 200, 40);
  
      // this.resetButton.class("resetButton");
      // this.resetButton.position(width / 2 + 230, 100);
  
      // this.leadeboardTitle.html("Leaderboard");
      // this.leadeboardTitle.class("resetText");
      // this.leadeboardTitle.position(width / 3 - 60, 40);
  
      // this.leader1.class("leadersText");
      // this.leader1.position(width / 3 - 50, 80);
  
      // this.leader2.class("leadersText");
      // this.leader2.position(width / 3 - 50, 130);
    }

    readBallPosition(){
       ballPositionX = database.ref("ballPosition/position/x")
       ballPositionY = database.ref("ballPosition/position/y")
      ballPositionX.on("value", function(data) {
        ballPosition.position.x = this.ballPositionX;
      });
      ballPositionY.on("value", function(data) {
        ballPosition.position.y = this.ballPositionY;
      });
    }

    updateBallPosition(){
      database.ref("/").update({
        ballPositionX: ballPosition.position.x,
        ballPositionY: ballPosition.position.y
    });
    }
}