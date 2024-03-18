
export default class optionsmenu extends Phaser.Scene{
    constructor() {
        super({ key: "optionsscreen" }); //set help screen key for the scene
      }
    preload(){
        this.add.image("button", "assets/images/button.png")
        this.add.image("background", "assets/images/bg.png")
    }
    create(){
        this.add.text(350, 100, 'Options')

        //Some Screen Navigation
        const helpButton = this.add.text(700, 60, "Help",
        {
            fontFamily: "Consolas",
            fontSize: "20px"
        }).setOrigin(0, 0);
        helpButton.setInteractive();
        helpButton.on("pointerdown", () => {
            this.scene.stop("optionsscreen");
            this.scene.stop("mainmenu");
            this.scene.start("helpscreen");
        });

        const mainMenuButton = this.add.text(700, 10, "Main Menu",
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

        //Options on Changing Keybinds to be added below
    }
}
