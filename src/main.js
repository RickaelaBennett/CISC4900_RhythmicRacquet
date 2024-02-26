/*import Phaser from "phaser";*/
import mainmenu from "./mainmenu.js";

//game configurations
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
};

const game = new Phaser.Game(config);
game.scene.add("gamemenu", mainmenu); //keys mainmenu.js to string mainmenu

//runs our main menu
game.scene.start("gamemenu");