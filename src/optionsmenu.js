
export default class optionsmenu extends Phaser.Scene{
    constructor() {
        super({ key: "optionsscreen" }); //set help screen key for the scene

      }
    preload(){
        this.load.image("button", "assets/images/button.png")
        this.load.image("background", "assets/images/bg.png")
    }
    create(){
        this.add.text(740, 100, 'Options')

        //Some Screen Navigation
        const helpButton = this.add.text(1400, 60, "Help",
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

        const mainMenuButton = this.add.text(1400, 10, "Main Menu",
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
        var chosen = false;
        this.key = this.input.keyboard.createCursorKeys();
        this.key.esc = this.input.keyboard.addKey('ESC');

        this.add.text(200, 200, "UP");      this.change_up = this.add.image(290, 210, "button").setInteractive();
        this.add.text(200, 250, "DOWN");    this.change_down = this.add.image(290, 260, "button").setInteractive();
        this.add.text(200, 300, "LEFT");    this.change_left = this.add.image(290, 310, "button").setInteractive();
        this.add.text(200, 350, "RIGHT");   this.change_right = this.add.image(290, 360, "button").setInteractive();

        this.add.text(500, 300, "SUPER");   this.change_super = this.add.image(610, 310, "button").setInteractive();
        this.add.text(500, 250, "ABILITY"); this.change_ability = this.add.image(610, 260, "button").setInteractive();
        this.add.text(500, 200, "DASH");    this.change_dash = this.add.image(610, 210, "button").setInteractive();
    }
    update(){
        this.change_key();
    }
    change_key(){
        var choice = this.key;
        this.change_up.on("pointerdown",() => {
            this.change_screen();
        });
        this.change_down.on("pointerdown",() => {
            this.change_screen();
        });
        this.change_left.on("pointerdown",() => {
            this.change_screen();
        });
        this.change_right.on("pointerdown",() => {
            this.change_screen();
        });
    }
    change_screen(){
        
        this.bg = this.add.rectangle(760, 300, 310, 410, 0x36F78B)
        this.border = this.add.rectangle(760, 300, 300, 400, 0x56A68B)
        this.txt = this.add.text(710, 100, "Choose new")
        //this.text.setVisible(false);
        if(this.key.esc.isDown){
            this.bg.setVisible(false);
            this.border.setVisible(false);
            this.txt.setVisible(false);
        }
    }
}
