class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, size, Texture) {
      super(scene, x, y, "player", Texture);
      scene.add.existing(this);
      scene.physics.world.enable(this);
      this.key = scene.input.keyboard.createCursorKeys();
      this.key.a = scene.input.keyboard.addKey('A'); //add key A to move left
      this.key.d = scene.input.keyboard.addKey('D'); //add key D to move right
      this.key.w = scene.input.keyboard.addKey('W'); //add key W to move Up
      this.setScale(size);
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