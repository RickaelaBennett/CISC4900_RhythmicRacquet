import Phaser from "phaser";

class game extends Phaser.Scene()
{
    
    preload(){
        this.load.image("assets/images/icon.png");
    }

    create(){
        this.add.text(400, 250, 'Game Screen')
    }
}

export default game