import Phaser from "phaser";

class helpmenu extends Phaser.Scene
{
    preload(){
        this.add.image("button", "assets/images/button.png")
        this.add.image("background", "assets/images/bg.jpg")
    }
    create(){
        this.add.text(400, 250, 'Help!')
    }
}

export default helpmenu