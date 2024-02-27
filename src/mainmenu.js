/*import Phaser from "phaser";*/
export default class mainmenu extends Phaser.Scene{
    preload(){
        this.add.image("button", "assets/images/button.png")
        this.add.image("background", "assets/images/bg.jpg")
    }
    create(){
        var background = this.add.image(70, 150, "background").setOrigin(0);
        background.setOrigin(0,0);
        background.setScale(2);
    }
}
