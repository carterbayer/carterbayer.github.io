// tiktok's magic algorithm
// TODO: tweak algorithm
// add at least two more new parameters


function magicAlgorithm(numLikes, comment, views, shares) {
    let rank = 0;

    // magic!
    if (numLikes >= 10000 && comment.includes("seahawk") && views >= 100000 && shares >= 100) {
        rank = 1;
    } else if (numLikes >= 500 && comment.includes("patriot") && views >= 20000 && shares >= 25) {
        rank = 100;
    } else {
        rank = 1000;
    }
    return rank;
}

function showUI() {
    // grab values from text boxes
    let likeCount = Number(document.getElementById("like-textbox").value);
    let comment = document.getElementById("comment-textbox").value;
    let shares = Number(document.getElementById("shares-textbox").value);
    let views = Number(document.getElementById("views-textbox").value);
    //TODO grab your additional inputs from the html with IDs

    // do the magic
    // TODO: Pass all 4 inputs into your magic function
    let rankResult = magicAlgorithm(likeCount, comment, shares, views);

    // display the output
    document.getElementById("result-paragraph").innerHTML = "Tiktok Rank: " + rankResult;

}