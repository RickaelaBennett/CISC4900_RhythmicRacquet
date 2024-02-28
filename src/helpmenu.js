

export default class helpmenu extends Phaser.Scene{
    constructor() {
        super({ key: "helpscreen" }); //set help screen key for the scene
      }

    preload(){
        this.add.image("button", "assets/images/button.png")
        this.add.image("background", "assets/images/bg.jpg")
    }
    create(){
        this.add.text(350, 100, 'Help!')

        //Instructions to on how to play game to be added below
    }
}

