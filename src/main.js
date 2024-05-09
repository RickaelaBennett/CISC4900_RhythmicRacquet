import mainmenu from "./mainmenu.js";
import helpmenu from "./helpmenu.js";
import optionsscreen from "./optionsmenu.js";

import charselect from "./charselector.js";

import Map1 from "./maps/map1.js";
import Map2 from "./maps/map2.js";
import Map3 from "./maps/map3.js";
import choosemap from "./choosemap.js"



//game configurations
const config = {
    type: Phaser.AUTO,
    //canvas size
    width: 1535,
    height: 650,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, 
            debug: true
        }
    }
};

const game = new Phaser.Game(config);
game.scene.add("mainmenu", mainmenu); //creates the menu screen and keys to mainmenu
game.scene.add("helpmenu", helpmenu); //creates the help screen and keys to helpmenu
game.scene.add("optionsscreen", optionsscreen);

//choosing maps and our map choices
game.scene.add("mapshop", choosemap);
game.scene.add("map1", Map1);
game.scene.add("map2", Map2);
game.scene.add("map3", Map3);
game.scene.add("characterscreen", charselect);

//runs our main menu
game.scene.start("mainmenu");