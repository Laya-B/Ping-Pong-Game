class Player {
    constructor() {
      this.index = null;
      this.positionY = 0;
      this.score = 0;
    }
  
    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      if (this.index === 1) {
        this.positionX = 50;
      } else {
        this.positionX = 750;
      }
  
      database.ref(playerIndex).set({
        positionY: this.positionY,
        score: this.score
      });
    }
  
    getCount() {
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", data => {
        playerCount = data.val();
      });
    }
  
    updateCount(count) {
      database.ref("/").update({
        playerCount: count
      });
    }
  
    update() {
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        positionY: this.positionY,
        score: this.score,
      });
    }
  
    static getPlayersInfo() {
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value", data => {
        allPlayers = data.val();
      });
    }
}