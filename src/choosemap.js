export default class optionsmenu extends Phaser.Scene{
    constructor() {
        super({ key: "mapshop" }); //set help screen key for the scene
      }
      preload(){
        this.load.image("Map", "assets/images/bg.png");
      }
      create(){
        const map1 = this.add.image(100, 200, "Map");
        //changes to game screen once the Play is pressed
        map1.setInteractive();
        map1.on("pointerdown", () => {
            this.scene.stop("mapshop"); 
            this.scene.start("map1");
        });
      }
}