class Player{
    constructor(){
      
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

    getScore() {
      var scoreRef = database.ref("score");
      scoreRef.on("value", data => {
        this.score = data.val();
      });
    }
    updateScore(newscore) {
    database.ref("/").update({
      score: newscore
    });
  }
}