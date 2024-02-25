import Phaser from "phaser";
import mainmenu from "./src/mainmenu.js";

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 400,
};

const game = new Phaser.Game(config);

game.scene.add("gamemenu", mainmenu); //keys mainmenu.js to string mainmenu

//runs our main menu
game.scene.start("gamemenu");