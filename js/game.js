class Game{
    constructor(){
        
        this.score = 0;
        this.displayScore = createElement("h2")
        
    }

    displayQ10(){
        this.b37 = createButton("1.Neneko")
        this.b38 = createButton("2.Shinko chan")
        this.b39 = createButton("3.I Chan")
        this.b40 = createButton("4.Michi")
        this.Img10=  createImg("images/image for Q10.jpg")
        this.question10= createElement('h1');
        this.next10 = createButton('Next');
    }

    displayQ9(){
        this.b33 = createButton("1.India")
        this.b34 = createButton("2.China")
        this.b35 = createButton("3.Japan")
        this.b36 = createButton("4.USA")
        this.Img9=  createImg("images/image for Q9.jpg")
        this.question9= createElement('h1');
        this.next9 = createButton('Next');
    }

    displayQ8(){
        this.b29 = createButton("1.blue shirt with red pants")
        this.b30 = createButton("2.red shirt with yellow shorts")
        this.b31 = createButton("3.blue shirt with red shorts")
        this.b32 = createButton("4.yellow shirt with red shorts")
        this.Img8 = createImg("images/image for Q8.jpg")
        this.question8= createElement('h1');
        this.next8 = createButton('Next');
    }

    displayQ7(){
        this.b25 = createButton("1.Masao")
        this.b26 = createButton("2.Bo Chan")
        this.b27 = createButton("3.Kazama")
        this.b28 = createButton("4.Nanae")
        this.Img7 = createImg("images/image for Q7.jpg")   
        this.question7= createElement('h1');
        this.next7 = createButton('Next');
    }

    displayQ6(){
        this.b21 = createButton("1.Quantum Robot")
        this.b22 = createButton("2.Action Kamen")
        this.b23 = createButton("3.Doraemon")
        this.b24 = createButton("4.Naughty Days")
        this.Img6 = createImg("images/image for Q6.webp")
        this.question6= createElement('h1');
        this.next6 = createButton('Next');
    }

    displayQ1(){
        this.b1 = createButton("1.Niharo")
        this.b2 = createButton("2.Nohari")
        this.b3 = createButton("3.Novara")
        this.b4 = createButton("4.Nohara")
        this.Img1 = createImg("images/image for Q1.jpg")
        this.question1 = createElement('h1');
        this.next1 = createButton('Next')
    }

    displayQ2(){
        this.b5 = createButton("1.Jasmine")
        this.b6 = createButton("2.Rose")
        this.b7 = createButton("3.Sunflower")
        this.b8 = createButton("4.Lotus")
        this.question2 = createElement('h1');
        this.next2 = createButton('Next');
        this.Img2 = createImg("images/image for Q2.jpg")

    }

    displayQ3(){
        this.b9 = createButton("1.Shinchan's neighbour")
        this.b10 = createButton("2.Shinchan's Bestfriend")
        this.b11= createButton("3.Shinchan's mother")
        this.b12= createButton("4.Shinchan's sister")
        this.Img3 = createImg("images/image for Q3.jpg")
        this.question3 = createElement('h1');
        this.next3 = createButton('Next');
    }

    displayQ4(){
        this.b13 = createButton("1.Nene sakaurda")
        this.b14 = createButton("2.ichan")
        this.b15 = createButton("3.Misae")
        this.b16 = createButton("4.Neneko Nohara")
        this.Img4 = createImg("images/image for Q4.jpg")
        this.question4 = createElement('h1');
        this.next4 = createButton('Next');

    }

    displayQ5(){
         
        this.b17 = createButton("1.kuro")
        this.b18 = createButton("2.Shinchi")
        this.b19 = createButton("3.Shiro")
        this.b20 = createButton("4.Bunzae")
        this.Img5 = createImg("images/image for Q5.jpg")   
        this.question5 = createElement('h1');
        this.next5 = createButton('Next');

    }
    getState() { 
        var gameStateRef = database.ref("gameState"); 
        gameStateRef.on("value", function(data) { gameState = data.val() }); 
    } 

    update(state) { 
        database.ref("/").update({ gameState: state }); 
    }

    hideQ1(){
        this.question1.hide();
        this.b1.hide();
        this.b2.hide();
        this.b3.hide();
        this.b4.hide();
        this.Img1.hide();
        this.next1.hide();
        
    }
    hideQ2(){
        this.question2.hide();
        this.b5.hide();
        this.b6.hide();
        this.b7.hide();
        this.b8.hide();
        this.Img2.hide();
        this.next2.hide();
    }
   
    hideQ3(){
        this.question3.hide();
        this.b9.hide();
        this.b10.hide();
        this.b11.hide();
        this.b12.hide();
        this.Img3.hide();
        this.next3.hide();
    }

    hideQ4(){
        this.question4.hide();
        this.b13.hide();
        this.b14.hide();
        this.b15.hide();
        this.b16.hide();
        this.Img4.hide();
        this.next4.hide();
    }

    hideQ5(){
        this.question5.hide();
        this.b17.hide();
        this.b18.hide();
        this.b19.hide();
        this.b20.hide();
        this.Img5.hide();
        this.next5.hide();
    }
    hideQ6(){
        this.question6.hide();
        this.b21.hide();
        this.b22.hide();
        this.b23.hide();
        this.b24.hide();
        this.Img6.hide();
        this.next6.hide();
    }

    hideQ7(){
        this.question7.hide();
        this.b25.hide();
        this.b26.hide();
        this.b27.hide();
        this.b28.hide();
        this.Img7.hide();
        this.next7.hide();
    }

    hideQ8(){
        this.question8.hide();
        this.b29.hide();
        this.b30.hide();
        this.b31.hide();
        this.b32.hide();
        this.Img8.hide();
        this.next8.hide();
    }

    hideQ9(){
        this.question9.hide();
        this.b33.hide();
        this.b34.hide();
        this.b35.hide();
        this.b36.hide();
        this.Img9.hide();
        this.next9.hide();
    }
    hideQ10(){
        this.question10.hide();
        this.b37.hide();
        this.b38.hide();
        this.b39.hide();
        this.b40.hide();
        this.Img10.hide();
        this.next10.hide();
    }
    


    start(){
        form = new Form();
        form.display();

        player = new Player();
        playerCount = player.getCount();
        score = player.getScore();
    }

    play(){
        form.hide();
        this.resetButton = createButton('Reset')
        this.resetButton.position(1000,30);
        this.resetButton.class("customButton");
        this.resetButton.mousePressed(() => {
            database.ref("/").set({
              playerCount: 0,
              gameState: 0,
              score:0,
            });
            window.location.reload();
          });
        

        
        // this.displayScore.html(this.score
        //     )
        // this.displayScore.position(1120,45)
        this.displayQ1();
        this.question1.html('1.What is the surname of Shinchan?');
        this.question1.position(400,80);
        this.Img1.position(0,80);
        this.Img1.size(300,400);
        this.b1.position(400,160);
        this.b1.class("customButton");
        this.b2.position(400,250);
        this.b2.class("customButton");
        this.b3.position(400,330);
        this.b3.class("customButton");
        this.b4.position(400,410);
        this.b4.class("customButton");
        this.b4.mousePressed(()=>{
            console.log(player.score)
            player.score = player.score+1
           
            player.updateScore(player.score)
        //  player.updateScore(score++);
        })

        this.next1.position(1000,500);
        this.next1.class("nextButton");
        this.next1.mousePressed(()=>{
        this.hideQ1()
        this.displayQ2();
         this.question2.html('2.Shinchan is in which school group?');
         this.question2.position(400,80);
         this.Img2.position(0,100);
         this.Img2.size(300,400);
         this.b5.position(400,160);
        this.b5.class("customButton");
        this.b6.position(400,240);
        this.b6.class("customButton");
        this.b7.position(400,330);
        this.b7.class("customButton");
        this.b7.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
        })
        this.b8.position(400,410);
        this.b8.class("customButton");
        this.next2.position(1000,500);
        this.next2.class("nextButton");
        this.next2.mousePressed(()=>{
            this.hideQ2();
            this.displayQ3();
            this.question3.html('3.Who is Himawari?');
            this.question3.position(400,80);
            this.Img3.position(0,100);
            this.Img3.size(300,400);
            this.b9.position(400,160);
           this.b9.class("customButton");
           this.b10.position(400,240);
           this.b10.class("customButton");
           this.b11.position(400,330);
           this.b11.class("customButton");
           this.b12.position(400,410);
           this.b12.class("customButton");
           this.b12.mousePressed(()=>{
                player.score = player.score+1
                player.updateScore(player.score)
            })
           this.next3.position(1000,500);
           this.next3.class("nextButton");
           this.next3.mousePressed(( )=>{
            this.hideQ3()
            this.displayQ4();
            this.question4.html('4.Who likes shinchan the most?');
            this.question4.position(400,80);
            this.Img4.position(0,100);
            this.Img4.size(300,400);
            this.b13.position(400,160);
           this.b13.class("customButton");
           this.b14.position(400,240);
           this.b14.class("customButton");
           this.b14.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
        })
           this.b15.position(400,330);
           this.b15.class("customButton");
           this.b16.position(400,410);
           this.b16.class("customButton");
           this.next4.position(1000,500);
           this.next4.class("nextButton");
           this.next4.mousePressed(( )=>{
            this.hideQ4()
            this.displayQ5();
            this.question5.html('5.What is the name of shinchan"s dog?');
            this.question5.position(400,80);
            this.Img5.position(0,100);
            this.Img5.size(300,400);
            this.b17.position(400,160);
           this.b17.class("customButton");
           this.b18.position(400,240);
           this.b18.class("customButton");
           this.b19.position(400,330);
           this.b19.class("customButton");
           this.b19.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
        })
           this.b20.position(400,410);
           this.b20.class("customButton");
           this.next5.position(1000,500);
           this.next5.class("nextButton");
           this.next5.mousePressed(( )=>{
            this.hideQ5()
            this.displayQ6();
            this.question6.html('6.Which cartoon does shinchan loves the most?');
            this.question6.position(400,80);
            this.Img6.position(10,100);
            this.Img6.size(300,400);
            this.b21.position(400,160);
           this.b21.class("customButton");
           this.b22.position(400,240);
           this.b22.class("customButton");
           this.b22.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
        })
           this.b23.position(400,330);
           this.b23.class("customButton");
           this.b24.position(400,410);
           this.b24.class("customButton");
           this.next6.position(1000,500);
           this.next6.class("nextButton");
           this.next6.mousePressed(( )=>{
            this.hideQ6()
            this.displayQ7();
            this.question7.html('7.shinchan"s which friend has a weird Nose?');
            this.question7.position(400,80);
            this.Img7.position(10,100);
            this.Img7.size(300,400);
            this.b25.position(400,160);
           this.b25.class("customButton");
           this.b26.position(400,240);
           this.b26.class("customButton");
           this.b26.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
          })
           this.b27.position(400,330);
           this.b27.class("customButton");
           this.b28.position(400,410);
           this.b28.class("customButton");
           this.next7.position(1000,500);
           this.next7.class("nextButton");
           this.next7.mousePressed(( )=>{
            this.hideQ7()
            this.displayQ8();
            this.question8.html('8.which colour clothes does shinchan wear?');
            this.question8.position(400,80);
            this.Img8.position(10,100);
            this.Img8.size(300,400);
            this.b29.position(400,160);
           this.b29.class("customButton");
           this.b30.position(400,240);
           this.b30.class("customButton");
           this.b30.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
        })
           this.b31.position(400,330);
           this.b31.class("customButton");
           this.b32.position(400,410);
           this.b32.class("customButton");
           this.next8.position(1000,500);
           this.next8.class("nextButton");
           this.next8.mousePressed(( )=>{
            this.hideQ8()
            this.displayQ9()
            this.question9.html('9.shinchan was originally made in?');
            this.question9.position(400,80);
            this.Img9.position(10,100);
            this.Img9.size(300,400);
            this.b33.position(400,160);
           this.b33.class("customButton");
           this.b34.position(400,240);
           this.b34.class("customButton");
           this.b35.position(400,330);
           this.b35.class("customButton");
           this.b35.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
        })
           this.b36.position(400,410);
           this.b36.class("customButton");
           this.next9.position(1000,500);
           this.next9.class("nextButton");
           this.next9.mousePressed(()=>{
            this.hideQ9()
            this.displayQ10()
            this.question10.html('10.What is the name of the weird girl in shinchan?');
            this.question10.position(400,80);
            this.Img10.position(10,100);
            this.Img10.size(300,400);
            this.b37.position(400,160);
           this.b37.class("customButton");
           this.b38.position(400,240);
           this.b38.class("customButton");
           this.b39.position(400,330);
           this.b39.class("customButton");
           this.b39.mousePressed(()=>{
            player.score = player.score+1
            player.updateScore(player.score)
        })
           this.b40.position(400,410);
           this.b40.class("customButton");
           this.next10.position(1000,500);
           this.next10.class("nextButton");
           this.next10.mousePressed(()=>{
              player.getScore();
              console.log(player.score);
              this.gameOver();

        })
        })
        })
        })
        })
        })
        })    
            })
        
        })
        })

        
    

   
    
   
    
    
    
   
    
this.next10.mousePressed(( )=>{
    this.hideQ10()
})




    }

    gameOver() {
        swal({
          title: `${player.score}`,
          text: "The above is your score",
          imageUrl:"https://i.pinimg.com/564x/88/1c/14/881c14ed6f5108423895617e3f003273.jpg",
          imageSize: "200x200",
          confirmButtonText: "Thanks For Playing..please reset to start the game again."
        });
    }

    end(){

    }
}