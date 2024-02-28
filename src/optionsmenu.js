
export default class optionsmenu extends Phaser.Scene{
    constructor() {
        super({ key: "optionsscreen" }); //set help screen key for the scene
      }
    preload(){
        this.add.image("button", "assets/images/button.png")
        this.add.image("background", "assets/images/bg.jpg")
    }
    create(){
        this.add.text(350, 100, 'Options')

        //Options on Changing Keybinds to be added below
    }
}
