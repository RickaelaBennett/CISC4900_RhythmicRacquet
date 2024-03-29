
export default class mainmenu extends Phaser.Scene{
    constructor() {
        super({ key: "mainmenu" }); //set mainmenu key for the scene
      }
    preload(){
        this.load.image("button", "assets/images/button.png")
        this.load.image("background", "assets/images/bg.png")
    }
    create(){
        this.add.text(350, 100, "Main Menu");
        var background = this.add.image(0, 0, "background")
        background.setOrigin(0,0);

        //Play Button
        const playButton = this.add.text(350, 230, "Play", 
        {
            fontFamily: "Consolas",
            fontSize: "50px"
        }).setOrigin(0,0);
        
        //changes to game screen once the Play is pressed
        playButton.setInteractive();
        playButton.on("pointerdown", () => {
            this.scene.stop("mainmenu"); 
            this.scene.start("mapshop");
        });

        //help button
        const helpButton = this.add.text(350, 300, "Help",
        {
            fontFamily: "Consolas",
            fontSize: "50px"
        }).setOrigin(0, 0);
        helpButton.setInteractive();
        helpButton.on("pointerdown", () => {
            this.scene.stop("mainmenu"); 
            this.scene.start("helpscreen");
        });

        //options button
        const optButton = this.add.text(350, 370, "Options",
        {
            fontFamily: "Consolas",
            fontSize: "50px"
        }).setOrigin(0,0);
        optButton.setInteractive();
        optButton.on("pointerdown", () => {
            this.scene.stop("mainmenu"); 
            this.scene.start("optionsscreen");
        });

    
    }
}
