import melodymatchpoint from "../players.js";
import ryanracquet from "../players.js";
import sonicserve from "../players.js";
import {choicep1} from "../charselector.js";
import {choicep2} from "../charselector.js";


/*Game variables*/
var p1score = 0;
var p2score = 0;   
var Start = true;  //has game started?
var Paused = false; //is game paused?
var winner = 0;     //0 for p1, 1 for p2
var p1serve = true; //Checks if its p1's serve


//browser scene map 1.
export default class Map1 extends Phaser.Scene{
    constructor() {
        super({ key: "map1" }); 
    }
    preload(){
        this.load.image("map1bg", "assets/images/Bg1.png");
        this.load.image("mm", "./assets/images/red.png");
        this.load.image("rr", "./assets/images/blue.png");
        this.load.image("ss", "./assets/images/green.png");
        this.load.audio("musicbg", "assets/audio/Map1.mp3")
    }
    create(){
        var time = this.time;

        var background = this.add.image(0, 0, "map1bg")
        background.setOrigin(0,0);
        
        //music
        this.music = this.sound.add("musicbg", { loop: true });
        this.music.play();
        
        //the buttons
        //help
        const helpButton = this.add.text(1400, 20, "Help",
        {
            fontFamily: "Consolas",
            fontSize: "10px",
            color: 0x650D1B
        }).setOrigin(0, 0);
        helpButton.setInteractive();
        helpButton.on("pointerdown", () => {
            this.scene.stop("map1"); 
           // this.music.pause();
            this.scene.start("helpscreen");
        });

        //options button
        const optButton = this.add.text(1400, 40, "Options",
        {
            fontFamily: "Consolas",
            fontSize: "10px",
            color: 0x650D1B
        }).setOrigin(0,0);
        optButton.setInteractive();
        optButton.on("pointerdown", () => {
            this.scene.stop("map1"); 
            this.music.pause();
            this.scene.start("optionsscreen");
        });
        
        //spawn players depending on what character they choose
        if(choicep1 == 1)
            this.player1 = new melodymatchpoint(this, 50, 650, "mm");
        else if (choicep1 == 2)
            this.player1 = new ryanracquet(this, 50, 650, "rr");
        else if (choicep1 == 3)
            this.player1 = new sonicserve(this, 50, 650, "ss");

        if(choicep2 == 1)
            this.player2 = new melodymatchpoint(this, 1485, 650, "mm");
        else if (choicep2 == 2)
            this.player2 = new ryanracquet(this, 1485, 650, "rr");
        else if (choicep2 == 3)
            this.player2 = new sonicserve(this, 1485, 650, "ss");
        this.physics.add.existing(this.player1);
        this.physics.add.existing(this.player2);
        this.player1.body.setCollideWorldBounds(true, 1, 1);
        this.player2.body.setCollideWorldBounds(true, 1, 1);
        
        //ball        
        //spawns ball on the side of a player depending on which player's turn to serve is
        if (Start == true){
            this.ball = p1serve ? this.add.circle(100, 100, 5, 0xf19d93) : this.add.circle(1550, 100, 5, 0xf19d93);
            this.physics.add.existing(this.ball);
            this.ball.body.setCollideWorldBounds(true, 1, 1);
            this.ball.body.setBounce(1, 1);
        }

        //So that the players and the balls can interact.
        this.physics.add.collider(this.player1, this.ball);
        this.physics.add.collider(this.player2, this.ball);

        //create net
        this.barrier = this.add.rectangle(767, 650, 20, 650, 0x13268A);
        this.net = this.add.rectangle(767, 650, 4, 150, 0x13268A);
        this.physics.add.existing(this.net);
        this.physics.add.existing(this.barrier);

        this.barrier.body.setImmovable(true);
        this.net.body.setImmovable(true);

        //make barrier invisible
        this.barrier.setVisible(false);
        this.net.body.setCollideWorldBounds(true, 1, 1);
        this.barrier.body.setCollideWorldBounds(true, 1, 1);


        //to ensure our players dont pass the net
        this.physics.add.collider(this.barrier, this.player1);
        this.physics.add.collider(this.barrier, this.player2);
        this.player1.body.setBounce(1, 1);
        this.player2.body.setBounce(1, 1);
        
        //ball collides w/ net
        this.physics.add.collider(this.net, this.ball);
        this.physics.add.collider(this.net, this.ball);

    }
    update(){
        this.player1.update();
        this.player2.update();
        this.player1.setInteractive();
        this.player2.setInteractive();

        //cant pass barrier
        if(this.physics.collide(this.player1, this.barrier) == true){
            this.player1.x -= 50
        }
        if(this.physics.collide(this.player2, this.barrier) == true){
            this.player2.x += 50
        }
        
        //ball hit
        if(this.physics.collide(this.player1, this.ball) == true){
            //if the ball is touching the players ball flies away
                this.ball.body.setVelocityX(400);
                this.ball.body.setVelocityY(150);
                this.ball.body.setAcceleration(-10);
        }
        if(this.physics.collide(this.ball, this.player2) == true){
            //if the ball is touching the players ball flies away
                this.ball.body.setVelocity(-400);
                this.ball.body.setVelocityY(150);
                this.ball.body.setAcceleration(10);
        }
    }

}
