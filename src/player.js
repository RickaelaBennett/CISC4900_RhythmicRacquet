//A basic Class for our Player
class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y) {

    }
    create(){
        this.add.image(100, 50,"icon");
    }

}