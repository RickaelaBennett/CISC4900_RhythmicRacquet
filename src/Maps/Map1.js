//import Player from "./player.js";

export default class Map1 extends Phaser.Scene{
    constructor() {
        super({ key: "map1" }); 
    }
    preload(){
        this.load.image("player1", "icon.png");
    }
    create(){
        this.add.text(300, 300, "This is Map1");
        
        //help
        const helpButton = this.add.text(600, 100, "Help",
        {
            fontFamily: "Consolas",
            fontSize: "10px"
        }).setOrigin(0, 0);
        helpButton.setInteractive();
        helpButton.on("pointerdown", () => {
            this.scene.stop("map1"); 
            this.scene.start("helpscreen");
        });

        //options button
        const optButton = this.add.text(600, 200, "Options",
        {
            fontFamily: "Consolas",
            fontSize: "10px"
        }).setOrigin(0,0);
        optButton.setInteractive();
        optButton.on("pointerdown", () => {
            this.scene.stop("map1"); 
            this.scene.start("optionsscreen");
        });

        playerSprite = new Player(this, 400, 760, 100, "player1");
        this.add.existing(playerSprite);
    }
}