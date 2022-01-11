// tiktok's magic algorithm
// TODO: tweak algorithm
// add at least two more new parameters
function magicAlgorithm(numLikes, comment, views, shares) {
    let rank = 0;

    // magic!
    if (numLikes >= 10000 && comment.includes("deer") && views >= 100000 && shares >= 100) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("tiger") && views >= 20000 && shares >= 25) {
        rank = 100;
    } else {
        rank = 1000;
    }
    return rank;
}

alert("Welcome to Tiktok! Imagive I'm showing you a tiktok video right now");
let likeCount = Number(prompt("How many likes did this Tiktok video get?"));
let comment = prompt("What is the most recent comment for this video?");
let views = Number(prompt("How many views did this video get?"));
let shares = Number(prompt("How many shares did this video get?"));

// using the two inputs above, pass that into the magic function and return the result

let rankResult = magicAlgorithm(likeCount, comment, views, shares);
let resultString = "Based off of the magic algorithm, this video's rank is: " + rankResult;

alert(resultString)