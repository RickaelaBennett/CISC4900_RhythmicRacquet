import "./players.js";


export default class charselect extends Phaser.Scene{

    constructor() {
        super({ key: "characterscreen" }); //set help screen key for the scene
      }
      preload(){
        this.load.image("red", "assets/images/red.png");
        this.load.image("blue", "assets/images/blue.png");
        this.load.image("green", "assets/images/green.png");
      }
      create(){
        //For each player, they have a choice between 3 characters, each character will be mapped to a number.
        var choicep1 = 0;
        var choicep2 = 0;
        var players_with_chars = 0;

        const char1 = this.add.image(384, 325, "red");
        //changes to game screen once the Play is pressed
        char1.setInteractive();
        char1.on("pointerdown", () => {
            if (players_with_chars == 0){
                choicep1 = 1;
                players_with_chars ++;
            } else if (players_with_chars == 1){
                choicep2 = 1;
            this.scene.stop("characterscreen"); 
            this.scene.start("mapshop", {player1choice : 1}, {player2choice : 1});
            }
        });
        const char2 = this.add.image(768, 325, "blue");
        //changes to game screen once the Play is pressed
        char2.setInteractive();
        char2.on("pointerdown", () => {
            if (players_with_chars == 0){
                choicep1 = 2;
                players_with_chars ++;
            } else if (players_with_chars == 1){
                choicep2 = 2;
            this.scene.stop("characterscreen"); 
            this.scene.start("mapshop", {player1choice : 2}, {player2choice : 2});
            }
        });

        const char3 = this.add.image(1151, 325, "green");
        //changes to game screen once the Play is pressed
        char3.setInteractive();
        char3.on("pointerdown", () => {
            if (players_with_chars == 0){
                choicep1 = 3;
                players_with_chars ++;
            } else if (players_with_chars == 1){
                choicep2 = 3;
            this.scene.stop("characterscreen"); 
            this.scene.start("mapshop", {player1choice : 3}, {player2choice : 3});
            }
        });
      }
}