

export default class helpmenu extends Phaser.Scene{
    constructor() {
        super({ key: "helpscreen" }); //set help screen key for the scene
      }

    preload(){
        this.add.image("button", "assets/images/button.png")
        this.add.image("background", "assets/images/bg.jpg")
    }
    create(){
        this.add.text(740, 50, 'Help!')
        //Instructions to on how to play game to be added below

        //Some Menu Navigation
        const optButton = this.add.text(1400, 10, "Options",
        {
            fontFamily: "Consolas",
            fontSize: "20px"
        }).setOrigin(0,0);
        optButton.setInteractive();
        optButton.on("pointerdown", () => {
            this.scene.stop("helpscreen"); 
            this.scene.stop("mainmenu");
            this.scene.start("optionsscreen");
        });
        const mainMenuButton = this.add.text(1400, 60, "Main Menu",
        {
            fontFamily: "Consolas",
            fontSize: "20px"
        }).setOrigin(0, 0);
        mainMenuButton.setInteractive();
        mainMenuButton.on("pointerdown", () => {
            this.scene.stop("optionsscreen"); 
            this.scene.stop("helpscreen");
            this.scene.start("mainmenu");
        });

        this.add.text(630, 150, "Welcome to Rhythmic Racquet!");
        this.add.text(300, 200, "(This is how you play)")

    }
}

