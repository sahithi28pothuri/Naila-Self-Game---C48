class Form{
  
  constructor(){
    this.titleImg = createImg("./images/image main shinchan.jpg","gameTitle") 
    this.greeting = createElement("h2")
    this.startB = createButton("let's start the Quiz")
  }



  setElementsPosition() {
      this.titleImg.position(300, 5);
      this.greeting.position(150,320);
      this.startB.position(900,500);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.greeting.class("titleText");
    this.startB.class("customButton");
  }
hide(){
  this.greeting.hide();
  this.titleImg.hide();
  this.startB.hide();
}

  handleButton(){
  this.startB.mousePressed(()=>{
  this.greeting.hide();
  this.titleImg.hide();
  this.startB.hide();
  flag = true;
  playerCount+=1;
  player.updateCount(playerCount)
  player.getScore()
  console.log(playerCount)
  // game.update(1);  
  // console.log(gameState)
  // game.play();


  })
  }
  display(){
    this.setElementsPosition()
    this.setElementsStyle()
    this.greeting.html("Try to score as much points as possible<br>Are you a true shinchan fan or just watch it when there is nothing to watch<br>This quiz will test your knowledge about how much you know shinchan.<br>This quiz starts with easy questions but gets harder by time!<br> ALL THE BEST!!!")
    this.handleButton()
  }
}
