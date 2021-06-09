class Game {
    constructor() {

    }
    getState() {
        var gameStateref = db.ref("gameState")
        gameStateref.on("value", function (data) {
            gameState = data.val()
        })
    }
    updateState(state) {
        db.ref("/").update({ gameState: state })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getPlayerCount()
            form=new Form()
            form.display()
        }
    }
    
    play(){
        form.hide()
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var displayPosition=130
            for(var plr in allPlayers){
                text(allPlayers[plr].name+" : "+allPlayers [plr].distance,100,displayPosition)
            displayPosition=displayPosition+20
            } 
        }
    }
}