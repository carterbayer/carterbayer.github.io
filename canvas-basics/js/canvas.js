// console.log("hello");

// lets do for loops
//count 1 - 10

for (let counter = 1; counter <= 10; counter++) {
    console.log(counter);
}

// count 10 - 1
for (let minus = 10; minus >= 1; minus--) {
    console.log(minus);
}
// count 1 - 10 only odd numbers
for (let odd = 1; odd < 11; odd = odd + 2) {
    console.log(odd);
}

// get canvas element
let myCanvas = document.getElementById("my-canvas");
// create canvas object
let ctx = myCanvas.getContext("2d");

//draw rect
ctx.fillStyle = "AntiqueWhite";
ctx.fillRect(0, 0, 200, 100);

//draw lines
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

//draw an x
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(0, 100);
ctx.stroke();



//using a fore loop, draw a bullseye
for (let x = 25; x > 0; x = x - 5) {
    ctx.beginPath();
    ctx.arc(100, 50, x, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.stroke();
}

