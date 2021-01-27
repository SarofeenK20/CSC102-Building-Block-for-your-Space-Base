//My countdown timer, a loop! Sets a variable to currTime, counts down, and changes a paragraph tag
var currTime = 50;
function loopCountdownTimer() {
    currTime = 50;
    for(var i = 0; i <= 50; i = i + 5) {
        if (i == 50) {            
            setTimeout(function() {
                document.getElementById("ctdnTimer").innerHTML = "Blastoff!!!";
            }, 1000*i)
        } else if (i > 25) {
            setTimeout(function() {
                document.getElementById("ctdnTimer").innerHTML =
                    "WARNING! Less than halfway to launch! " + currTime + " seconds left";
                    currTime = currTime - 5;
            }, 1000 * i)
        } else {
            setTimeout(function() {
                document.getElementById("ctdnTimer").innerHTML = currTime + " seconds left";
                currTime = currTime - 5;
            }, 1000*i)
        } 
    }
}
//this is the fuction to roll dice and play craps, if else shows whether or not you've won
function playCraps() {
    //variables are set for the dice, 
    var die1 = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    var die2 = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

    var sum = die1 + die2;

    //i created a variable for the text so it can say that you rolled
    var rollVar = "You rolled a ";
    document.getElementById("rollRel").innerHTML = ( rollVar + die1 + " and " + die2 + ".");
    
    //if the dice add up to 7 or 11, you lose, if they equal one another you win, if not, retry!
    if (sum == 7 || sum == 11) {
        document.getElementById("results").innerHTML = (" CRAPS! You Lose!");
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("results").innerHTML = (" DOUBLES! You Win!!");
    } else {
        document.getElementById("results").innerHTML = (" Try again!");
    }
}

