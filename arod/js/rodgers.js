let skill = 5;
let teammates = 5;
let money = 5;

function teammatesRodgers() {
    console.log("Bring Rodgers teammates...")
        // teammates += 1;
    console.log("teammates: " + teammates);
    if (teammates < 10) {
        teammates += 1;
    }

    refreshUI();
}
/*
function refreshUI() {
    let teammateMeter = document.getElementById("teammate-meter");
    teammateMeter.value = teammates;

    let teammateParagraph = document.getElementById("teammate-paragraph");
    teammateParagraph.innerHTML = teammates;
}
*/
function trainRodgers() {
    console.log("Train Rodgers...")
    console.log("skill: " + skill);
    if (skill < 10) {
        skill += 1;
    }
    refreshUI();
}
/*
function refreshUI2() {
    let skillMeter = document.getElementById("skill-meter");
    skillMeter.value = skill;

    let skillParagraph = document.getElementById("skill-paragraph");
    skillParagraph.innerHTML = skill;
}
*/

function payRodgers() {
    console.log("Paying Rodgers...")
    console.log("money: " + money);
    if (money < 10) {
        money += 1;
    }
    refreshUI();
}

/* function refreshUI3() {
    let moneyMeter = document.getElementById("money-meter");
    moneyMeter.value = money;

    let moneyParagraph = document.getElementById("money-paragraph");
    moneyParagraph.innerHTML = money;
}
*/
function refreshUI() {

    // update teammate meter
    let teammateMeter = document.getElementById("teammate-meter");
    teammateMeter.value = teammates;
    let teammateParagraph = document.getElementById("teammate-paragraph");
    teammateParagraph.innerHTML = teammates;

    // update skill meter
    let skillMeter = document.getElementById("skill-meter");
    skillMeter.value = skill;
    let skillParagraph = document.getElementById("skill-paragraph");
    skillParagraph.innerHTML = skill;

    // update money meter
    let moneyMeter = document.getElementById("money-meter");
    moneyMeter.value = money;
    let moneyParagraph = document.getElementById("money-paragraph");
    moneyParagraph.innerHTML = money;

    let sum = teammates + money + skill;

    // update arod image and paragraph
    let arodImg = document.getElementById("arod-image");
    let arodParagraph = document.getElementById("rodgers-condition");

    if (sum >= 27) {
        arodImg.src = "images/superbowl-arod.jpg";
        arodParagraph.innerHTML = "We won the super bowl!";
    } else if (sum < 27 && sum >= 22) {
        arodImg.src = "images/happy-arod.jpg";
        arodParagraph.innerHTML = "I am very happy with the Packers";
    } else if (sum < 22 && sum >= 16) {
        arodImg.src = "images/arod-fist.jpg";
        arodParagraph.innerHTML = "I have no feelings towards anyone or anything.";
    } else if (sum < 16 && sum >= 10) {
        arodImg.src = "images/mad-arod.jpg";
        arodParagraph.innerHTML = "I am mad at the packers...";
    } else if (sum < 10 && sum >= 5) {
        arodImg.src = "images/arod-money.jpg";
        arodParagraph.innerHTML = "I have lots of money and don't really care about how the team does :)";
    } else if (sum < 5) {
        arodImg.src = "images/retired-arod.jpg";
        arodParagraph.innerHTML = "I am retired and very happy now! :)";
    } else { // default image and state
        arodImg.src = "images/arod-fist.jgp";
        arodParagraph.innerHTML = "I have no feelings towards anyone or anything, even life."
    }
    if (sum === 0) {
        alert("Aaron Rodgers died... better luck keeping him alive next time!");
    }
}



function decreaseTeammates() {
    if (teammates > 0) {
        teammates -= 0.25;
    }
    refreshUI();
}

setInterval(decreaseTeammates, 1000);

function decreaseSkill() {
    if (skill > 0) {
        skill -= 0.25;
    }
    refreshUI();
}

setInterval(decreaseSkill, 1000);

function decreaseMoney() {
    if (money > 0) {
        money -= 0.25;
    }
    refreshUI();
}

setInterval(decreaseMoney, 1000);