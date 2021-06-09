class Form{
    constructor(){
         this.input=createInput("name")
        this.button=createButton("Red Button")
        this.greeting=createElement("h2")
    }
   hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()
   }
    display(){
        var title=createElement("h1")
        title.html("Car Racing Game")
        title.position(100,20)

       
       this.input.position(100,100)

        
        this.button.position(100,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updatePlayerCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(100,100)
        })
        
    }
}