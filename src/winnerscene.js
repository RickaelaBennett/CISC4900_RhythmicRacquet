import winner from "./maps/map1.js";
export default class winnerscene extends Phaser.Scene{
    constructor() {
        super({ key: "winnerscreen" }); //set help screen key for the scene
    }
    preload(){

    }
    create(){
        this.add.text(700, 100, "WINNER");
    }
    update(){

    }
}