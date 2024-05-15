import winner from "./maps/map1.js";
export default class winnerscene extends Phaser.Scene{
    constructor() {
        super({ key: "winnerscreen" }); //set help screen key for the scene
    }
    preload(){

    }
    create(){
        this.add.text(700, 100, "WINNER");
        if (winner == 1){
            this.add.text(650, 300, "PLAYER 1!", {
                fontFamily: "Consolas",
                fontSize: "72px",
                color: 0x650D1B
            });
        } else if (winner == 2){
            this.add.text(650, 300, "PLAYER 2!", {
                fontFamily: "Consolas",
                fontSize: "72px",
                color: 0x650D1B
            });
        }
    }
    update(){

    }
}