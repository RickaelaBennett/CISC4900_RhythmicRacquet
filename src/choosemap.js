export default class choosemap extends Phaser.Scene{
    constructor() {
        super({ key: "mapshop" }); //set help screen key for the scene
      }
      preload(){
        this.load.image("Map", "assets/images/bg.png");
      }
      create(){
        const map1 = this.add.image(384, 325, "Map");
        //changes to game screen once the Play is pressed
        map1.setInteractive();
        map1.on("pointerdown", () => {
            this.scene.stop("mapshop"); 
            this.scene.start("map1");
        });
        const map2 = this.add.image(768, 325, "Map");
        //changes to game screen once the Play is pressed
        map2.setInteractive();
        map2.on("pointerdown", () => {
            this.scene.stop("mapshop"); 
            this.scene.start("map2");
        });

        const map3 = this.add.image(1151, 325, "Map");
        //changes to game screen once the Play is pressed
        map3.setInteractive();
        map3.on("pointerdown", () => {
            this.scene.stop("mapshop"); 
            this.scene.start("map3");
        });
        
      }
}