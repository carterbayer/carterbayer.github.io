// canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let cx = document.querySelector("canvas").getContext("2d");


// get paragraph items
let keydownOutput = document.getElementById("keydown-output")
let keyupOutput = document.getElementById("keyup-output")

//player position and movement
let playerX = 250;
let playerY = 365;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 5;
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 40;

// 1 right wall segment
let segment1x = 700;
let segment1y = 150;
let segment1Width = 20;
let segment1Height = 290;

// 1 top wall segment 
let = top1segmentX = 260;
let = top1segmentY = 55;
let = top1segmentWidth = 460;
let = top1segmentHeight = 20;

// 2 top wall segment (the one hanging down)
let = top2segmentX = 560;
let = top2segmentY = 55;
let = top2segmentWidth = 20;
let = top2segmentHeight = 200;

// left wall segment
let = leftsegmentX = 250;
let = leftsegmentY = 55;
let = leftsegmentWidth = 20;
let = leftsegmentHeight = 290;

// bottom wall segment
let = bottomsegmentX = 250;
let = bottomsegmentY = 420;
let = bottomsegmentWidth = 470;
let = bottomsegmentHeight = 20;

// left 2 wall segment
let = left2segmentX = 260;
let = left2segmentY = 155;
let = left2segmentWidth = 200;
let = left2segmentHeight = 20;

// bottom 2 wall segment
let = bottom2segmentX = 450;
let = bottom2segmentY = 275;
let = bottom2segmentWidth = 20;
let = bottom2segmentHeight = 150;

// bottom 2 wall sticking out segment
let = bottom2sticksegmentX = 350;
let = bottom2sticksegmentY = 325;
let = bottom2sticksegmentWidth = 100;
let = bottom2sticksegmentHeight = 20;

// right wall sticking out segment
let = rightsegmentX = 550;
let = rightsegmentY = 320;
let = rightsegmentWidth = 150;
let = rightsegmentHeight = 20;

// top hanging segment sticking out to the right
let = toprightsegmentX = 575;
let = toprightsegmentY = 175;
let = toprightsegmentWidth = 50;
let = toprightsegmentHeight = 20;

// finish line
let = finishX = 700;
let = finishY = 100;
let = finishWidth = 20;
let = finishHeight = 20;

function drawFinish() {
    ctx.fillRect(finishX, finishY, finishWidth, finishHeight)
    ctx.fillStyle = "green";
}

function drawPlayer() {
    ctx.fillRect(playerX, playerY, PLAYER_WIDTH, PLAYER_HEIGHT)
    ctx.fillStyle = "red";
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 1000 - PLAYER_WIDTH) {
        playerX = 1000 - PLAYER_WIDTH;
    }

    playerY += (playerSpeed * playerYDir);
}

function collisionDetection() {
    // check initial wall
    if (playerX + PLAYER_WIDTH >= segment1x &&
        playerX <= segment1x + segment1Width &&
        playerY + PLAYER_HEIGHT >= segment1y &&
        playerY <= segment1y + segment1Height) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= top1segmentX &&
        playerX <= top1segmentX + top1segmentWidth &&
        playerY + PLAYER_HEIGHT >= top1segmentY &&
        playerY <= top1segmentY + top1segmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= top2segmentX &&
        playerX <= top2segmentX + top2segmentWidth &&
        playerY + PLAYER_HEIGHT >= top2segmentY &&
        playerY <= top2segmentY + top2segmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= leftsegmentX &&
        playerX <= leftsegmentX + leftsegmentWidth &&
        playerY + PLAYER_HEIGHT >= leftsegmentY &&
        playerY <= leftsegmentY + leftsegmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= bottomsegmentX &&
        playerX <= bottomsegmentX + bottomsegmentWidth &&
        playerY + PLAYER_HEIGHT >= bottomsegmentY &&
        playerY <= bottomsegmentY + bottomsegmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= left2segmentX &&
        playerX <= left2segmentX + left2segmentWidth &&
        playerY + PLAYER_HEIGHT >= left2segmentY &&
        playerY <= left2segmentY + left2segmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= bottom2segmentX &&
        playerX <= bottom2segmentX + bottom2segmentWidth &&
        playerY + PLAYER_HEIGHT >= bottom2segmentY &&
        playerY <= bottom2segmentY + bottom2segmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= bottom2sticksegmentX &&
        playerX <= bottom2sticksegmentX + bottom2sticksegmentWidth &&
        playerY + PLAYER_HEIGHT >= bottom2sticksegmentY &&
        playerY <= bottom2sticksegmentY + bottom2sticksegmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= rightsegmentX &&
        playerX <= rightsegmentX + rightsegmentWidth &&
        playerY + PLAYER_HEIGHT >= rightsegmentY &&
        playerY <= rightsegmentY + rightsegmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= toprightsegmentX &&
        playerX <= toprightsegmentX + toprightsegmentWidth &&
        playerY + PLAYER_HEIGHT >= toprightsegmentY &&
        playerY <= toprightsegmentY + toprightsegmentHeight) {
        gameover();
    } else if (playerX + PLAYER_WIDTH >= finishX &&
        playerX <= finishX + finishWidth &&
        playerY + PLAYER_HEIGHT >= finishY &&
        playerY <= finishY + finishHeight) {
        gamecomplete()
    }
}

function gameover() {
    playerX = 250;
    playerY = 365;
    playerXDir = 0;
    playerYDir = 0;
    alert("YOU HIT THE WALL... GAME OVER ");
}

function gamecomplete() {
    playerX = 250;
    playerY = 365;
    playerXDir = 0;
    playerYDir = 0;
    alert("You made it to the finish line, congratulations!!");
}

function wallOne() {
    cx.fillRect(segment1x, segment1y, segment1Width, segment1Height)
    cx.fillRect(top1segmentX, top1segmentY, top1segmentWidth, top1segmentHeight)
    cx.fillRect(top2segmentX, top2segmentY, top2segmentWidth, top2segmentHeight)
    cx.fillRect(leftsegmentX, leftsegmentY, leftsegmentWidth, leftsegmentHeight)
    cx.fillRect(bottomsegmentX, bottomsegmentY, bottomsegmentWidth, bottomsegmentHeight)
    cx.fillRect(left2segmentX, left2segmentY, left2segmentWidth, left2segmentHeight)
    cx.fillRect(bottom2segmentX, bottom2segmentY, bottom2segmentWidth, bottom2segmentHeight)
    cx.fillRect(bottom2sticksegmentX, bottom2sticksegmentY, bottom2sticksegmentWidth, bottom2sticksegmentHeight)
    cx.fillRect(rightsegmentX, rightsegmentY, rightsegmentWidth, rightsegmentHeight)
    cx.fillRect(toprightsegmentX, toprightsegmentY, toprightsegmentWidth, toprightsegmentHeight)
}

function refreshUI() {
    ctx.clearRect(0, 0, 1000, 1000);
    movePlayer();
    drawPlayer();
    wallOne();
    collisionDetection();
    drawFinish()
}

// when key is pressed
function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    // move player
    if (key === 37) {
        playerXDir = -1;
    } else if (key === 39) {
        playerXDir = 1;
    } else if (key == 38) {
        playerYDir = -1
    } else if (key === 40) {
        playerYDir = 1;
    }
}

// when key is released
function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key down code: " + key;

    // stop player
    if (key === 37) {
        playerXDir = 0;
    } else if (key === 39) {
        playerXDir = 0;
    } else if (key === 38) {
        playerYDir = 0;
    } else if (key === 40) {
        playerYDir = 0;
    }
}

setInterval(refreshUI, 30);