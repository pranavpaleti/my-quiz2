class Question {

    constructor() {
      this.title=createElement('h2');
      this.question=createElement('h3');
      this.option1=createElement('h4');
      this.option2=createElement('h4');
      this.option3=createElement('h4');
      this.option4=createElement('h4');
      this.input1=createInput("Enter Your Name");
      this.input2=createInput("Enter Your Answer");
      this.submit=createButton("submit");
    }
    
  
    display(){
      this.title.html("MyQuiz Game");
      this.title.position(350,0);

      this.question.html("which of the following country is monarch country");
      this.question.position(150,80);
      this.option1.html("1:thailand");
      this.option1.position(150,100);
      this.option2.html("2:india");
      this.option2.position(150,120);
      this.option3.html("3:USA");
      this.option3.position(150,140);
      this.option4.html("4:UAE");
      this.option4.position(150,160);

      this.input1.position(150,250);
      this.input2.position(300,250);
      this.submit.position(300,300);
      this.submit.mousePressed(()=>{
        player.name=this.input1.value()
        player.answer=this.input2.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.update();
        player.updateCount(playerCount);
        this.submit.hide();
        this.input1.hide();
        this.input2.hide();
      })
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        database.ref('/').update({
          players:null
        })
        
      });
  
    }
  }
  