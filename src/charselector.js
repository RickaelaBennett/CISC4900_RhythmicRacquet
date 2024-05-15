import "./players.js";
var choicep1 = 0;
var choicep2 = 0;
export {choicep1, choicep2};

export default class charselect extends Phaser.Scene{

    constructor() {
        super({ key: "characterscreen" }); //set help screen key for the scene
      }
      preload(){
        this.load.image("red", "assets/images/red.png");
        this.load.image("blue", "assets/images/blue.png");
        this.load.image("green", "assets/images/green.png");
        this.load.spritesheet("p1", "../p1_coin_spritesheet.png");
        this.load.spritesheet("p2", "../p2_coin_spritesheet.png");
      }
      create(){
        //For each player, they have a choice between 3 characters, each character will be mapped to a number.
        var players_with_chars = 0;

        this.add.text(700, 100, "Character Select");

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
            this.scene.start("mapshop");
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
            this.scene.start("mapshop");
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
            this.scene.start("mapshop");
            }
        });

        const back = this.add.text(700, 500, "Back");
        back.setInteractive();
        back.on("pointerdown", () => {
            if (players_with_chars > 0){
                players_with_chars -= 1;
            }
        });
      }
}