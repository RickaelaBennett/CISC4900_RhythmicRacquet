export default class Map2 extends Phaser.Scene{
    constructor() {
        super({ key: "map3" }); 
    }
    preload(){

    }
    create(){
        this.add.text(400, 300, "This is Map3");
    }

}