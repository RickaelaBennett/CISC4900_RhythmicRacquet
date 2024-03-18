

export default class game extends Phaser.Scene{
    constructor() {
        super({ key: "gamescreen" }); //key for the scene
      }
    
    preload(){
        //image that says button are standins for players.
        this.load.image("player", "assets/images/button.png");
    }
    create(){
        
        
    }
}

