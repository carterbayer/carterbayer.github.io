// canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

// get paragraph items
let keydownOutput = document.getElementById("keydown-output")
let keyupOutput = document.getElementById("keyup-output")

//player position and movement
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 5;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

// ball position and movement
let ballX = 100;
let ballY = 100;
let ballXDir = 5;
let ballYDir = 5;
let BALL_RADIUS = 20;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT)
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 500 - PADDLE_WIDTH) {
        playerX = 500 - PADDLE_WIDTH;
    }

    playerY += (playerSpeed * playerYDir);
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
}

function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

function checkBallCollision() {
    // check vertical wall
    if (ballY > 500 - BALL_RADIUS || (ballY < 0 + BALL_RADIUS)) {
        ballYDir = -ballYDir;
    }
    if (ballX > 500 - BALL_RADIUS || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = -ballXDir;
    }

    // check to see if I hit the paddle
    if (ballX + BALL_RADIUS >= playerX &&
        ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH &&
        ballY + BALL_RADIUS >= playerY &&
        ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT) {
        ballYDir = ballYDir * -1.005;
    }

}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    // animate ball
    checkBallCollision();
    moveBall();
    drawBall();
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