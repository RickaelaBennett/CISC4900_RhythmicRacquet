import Phaser from './node_modules/phaser';
export default class mainmenu extends Phaser.Scene{
    preload(){

    }
    create(){
        const text = this.add.text(290, 290, "Hi!")
        text.setOrigin(0.5, 0.5)

    }
}
