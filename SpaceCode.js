var currTime = 50;
function countdownTimer() {
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime + " seconds to Blastoff";
    }, 0000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -5 + " seconds to Blastoff";
    }, 5000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -10 + " seconds to Blastoff";
    }, 10000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -15 + " seconds to Blastoff";
    }, 15000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -20 + " seconds to Blastoff";
    }, 20000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -25 + " seconds to Blastoff";
    }, 25000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -30 + " seconds to Blastoff";
    }, 30000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -35 + " seconds to Blastoff";
    }, 35000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -40 + " seconds to Blastoff";
    }, 40000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = currTime -45 + " seconds to Blastoff";
    }, 45000);
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML ="Blastoff!!!"
    }, 50000);
}
function playCraps() {
    
}