
var char;
var charYPos=200;

function startGame(){
    gameCanvas.start();
    player = new createPlayer(30, 30, 10);
}

function createPlayer(w, h, xPos){
    w = width;
    h = height;
    xPos = x;
    yPos = charYPos;

    ctx = gameCanvas.context;
    ctx.fillStyle = "green";
    ctx.fillRect = (xPos, yPos, w, h);
}