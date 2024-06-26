export default class Player extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y, Texture) {
    super(scene, x, y, Texture);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.key = scene.input.keyboard.createCursorKeys();
    this.key.a = scene.input.keyboard.addKey('A'); //add key A to move left
    this.key.d = scene.input.keyboard.addKey('D'); //add key D to move right
    this.key.w = scene.input.keyboard.addKey('W'); //add key W to move Up
    this.key.s = scene.input.keyboard.addKey('S');

    this.body.setCollideWorldBounds(true);
    this.body.setSize(100, 100);
    this.body.setBounce(1, 1);

  }
  update(){
    this.handleInput();
  }
  handleInput(){
    this.body.setVelocity(0);
    var up = this.key.w.isDown;
    var down = this.key.s.isDown;
    var left = this.key.a.isDown
    var right = this.key.d.isDown
    
    //movement
    if (left) {
        this.x -= 5;
    } else if (right) {
        this.x += 5;
    } else if (up) {
        this.y -=10;
    } else if (down) {
        this.y += 5;
    } else {
        this.setVelocityX(0);
    }
  }
}

export class melodymatchpoint extends Player {
  constructor(scene, x, y, Texture) {
    super(scene, x, y, Texture);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.setGravityY(500);
  }
  
}

export class ryanracquet extends Player {
  constructor(scene, x, y) {
    super(scene, x, y, Texture);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.setGravityY(500);
  }
}

export class sonicserve extends Player {
  constructor(scene, x, y, Texture) {
    super(scene, x, y, Texture);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.setGravityY(500);
  }
}

export class Player2 extends Player {
  //tester opponent
  constructor(scene, x, y, Texture) {
    super(scene, x, y, Texture);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.key = scene.input.keyboard.createCursorKeys();
    this.setGravityY(1000);
    

  }
  update(){
    this.handleInput();
  }
  handleInput(){
    this.body.setVelocity(0);

    if (this.key.left.isDown) {
        //this.setVelocityX(-250);
        this.x -= 2;
    } else if (this.key.right.isDown) {
        //this.setVelocityX(250);
        this.x += 2;
    } else if (this.key.up.isDown) {
        //this.setVelocityY(-250);
        this.y -= 2;
    } else if (this.key.down.isDown) {
        //this.setVelocityY(250);
        this.y += 2;
    } else {
        this.setVelocityX(0);
    }
  }
}