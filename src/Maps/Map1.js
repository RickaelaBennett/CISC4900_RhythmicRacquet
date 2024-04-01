

/*Game variables*/
var p1score = 0;
var p2score = 0;   
var Start = false;  //has game started?
var Paused = false; //is game paused?
var winner = 0;     //0 for p1, 1 for p2

//Player Class
class melodymatchpt extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, Texture) {
      super(scene, x, y, Texture);
      scene.add.existing(this);
      this.key = scene.input.keyboard.createCursorKeys();
      this.key.p = scene.input.keyboard.addKey('P'); //pause
      this.key.a = scene.input.keyboard.addKey('A'); //add key A to move left
      this.key.d = scene.input.keyboard.addKey('D'); //add key D to move right
      this.key.w = scene.input.keyboard.addKey('W'); //add key W to move Up
      this.setScale(1);
      this.setVelocity(100, 200);
      this.setCollideWorldBounds(true);
      
    }

    update(time){
        this.handleInput();
    }
    handleInput() {
        if (this.key.left.isDown || this.key.a.isDown) {
          this.setVelocityX(-250);
        } else if (this.key.right.isDown || this.key.d.isDown) {
          this.setVelocityX(250);
        } else if (this.key.up.isDown || this.key.w.isDown) {
            this.setVelocityY(250);
        } else {
          this.setVelocityX(0);
        }
    }
      
}


//browser scene map 1.
export default class Map1 extends Phaser.Scene{
    constructor() {
        super({ key: "map1" }); 
    }
    preload(){
        this.load.image("map1bg", "assets/images/Bg1.png");
        this.load.image("p1", "assets/images/button.png");
        this.load.audio("musicbg", "assets/audio/Map1.mp3")
    }
    create(){
        var time = this.time;

        var background = this.add.image(0, 0, "map1bg")
        background.setOrigin(0,0);
        
        this.music = this.sound.add("musicbg", { loop: true });
        this.music.play();

        //help
        const helpButton = this.add.text(700, 20, "Help",
        {
            fontFamily: "Consolas",
            fontSize: "10px"
        }).setOrigin(0, 0);
        helpButton.setInteractive();
        helpButton.on("pointerdown", () => {
            this.scene.stop("map1"); 
            this.music.pause();
            this.scene.start("helpscreen");
        });

        //options button
        const optButton = this.add.text(700, 40, "Options",
        {
            fontFamily: "Consolas",
            fontSize: "10px"
        }).setOrigin(0,0);
        optButton.setInteractive();
        optButton.on("pointerdown", () => {
            this.scene.stop("map1"); 
            this.music.pause();
            this.scene.start("optionsscreen");
        });

        
        //spawn player
        player1 = new melodymatchpt(this, 100, 550, "p1");
        this.add.existing(player1);  
    }
    update(){
        this.player1.update();
    }
}
