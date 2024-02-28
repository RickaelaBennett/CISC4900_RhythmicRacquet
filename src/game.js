

export default class game extends Phaser.Scene{
    constructor() {
        super({ key: "gamescreen" }); //key for the scene
      }
    
    preload(){
        //image that says button are standins for players.
        this.load.image("player", "assets/images/button.png");
    }
    create(){
        this.add.text(350, 100, 'Game Screen');
        this.add.image(100, 500, "player");
        this.add.image(700, 500, "player");
    }
}

