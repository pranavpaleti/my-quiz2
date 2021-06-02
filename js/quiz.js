class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        question = new Question()
        question.display();
      }
  
    }  
  
    play(){
      
      
      Player.getPlayerInfo();
      var display_position=400
      if(allPlayers !== undefined){
        background("pink");
       text("correct answer is highlighted in green colour",150,250);
       var ans=1;
       
        for(var plr in allPlayers){
        if(allPlayers[plr].answer==1){
          fill("green")
        }else{
          fill("red")
        }
  
         
         
         
         
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 120,display_position)
          display_position=display_position+20
        }
  
      }
  
      
     
  
    }
  
  }