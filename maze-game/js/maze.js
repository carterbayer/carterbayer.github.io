// canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let cx = document.querySelector("canvas").getContext("2d");


// get paragraph items
let keydownOutput = document.getElementById("keydown-output")
let keyupOutput = document.getElementById("keyup-output")

//player position and movement
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 3;
const PADDLE_WIDTH = 40;
const PADDLE_HEIGHT = 40;



function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT)
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 1000 - PADDLE_WIDTH) {
        playerX = 1000 - PADDLE_WIDTH;
    }

    playerY += (playerSpeed * playerYDir);
}

function wallOne() {
    cx.fillRect(700, 150, 20, 290)
    cx.fillRect(260, 55, 450, 20)
    cx.fillRect(560, 55, 20, 200)
    cx.fillRect(250, 55, 20, 290)
    cx.fillRect(250, 420, 470, 20)
    cx.fillRect(260, 155, 200, 20)
    cx.fillRect(450, 275, 20, 150)
    cx.fillRect(350, 325, 100, 20)
    cx.fillRect(550, 320, 150, 20)
    cx.fillRect(575, 175, 50, 20)
}

function refreshUI() {
    ctx.clearRect(0, 0, 1000, 1000);
    movePlayer();
    drawPlayer();
    wallOne()
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