/*import Phaser from "phaser";*/
import mainmenu from "./mainmenu.js";
import helpmenu from "./helpmenu.js";
import gamescreen from "./game.js";
import optionsscreen from "./optionsmenu.js";

//game configurations
const config = {
    type: Phaser.AUTO,
    //canvas size
    width: 800,
    height: 600,
};

const game = new Phaser.Game(config);
game.scene.add("mainmenu", mainmenu); //creates the menu screen and keys to mainmenu
game.scene.add("helpmenu", helpmenu); //creates the help screen and keys to helpmenu
game.scene.add("gamescreen", gamescreen); //creates game screen and keys to gamescreen
game.scene.add("optionsscreen", optionsscreen);

//runs our main menu
game.scene.start("mainmenu");