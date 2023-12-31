var clearTime;
var seconds = 0,
    minutes = 0,
    hours = 0;
var secs, mins, gethours;

function startWatch() {
    if (seconds === 60) {
        seconds = 0;
        minutes = minutes + 1;
    }
    mins = minutes < 10 ? "0" + minutes + ": " : minutes + ": ";
    if (minutes === 60) {
        minutes = 0;
        hours = hours + 1;
    }
    gethours = hours < 10 ? "0" + hours + ": " : hours + ": ";
    secs = seconds < 10 ? "0" + seconds : seconds;

    var continueButton = document.getElementById("continue");
    continueButton.removeAttribute("hidden");
    var x = document.getElementById("timer");
    x.innerHTML = gethours + mins + secs;
    seconds++;
    clearTime = setTimeout("startWatch( )", 1000);
}
function startTime() {
    if (seconds === 0 && minutes === 0 && hours === 0) {
        var fulltime = document.getElementById("fulltime");
        fulltime.style.display = "none";
        var showStart = document.getElementById("start");
        showStart.style.display = "none";
        startWatch();
    }
}
var start = document.getElementById("start");
start.addEventListener("click", startTime);

function stopTime() {
    if (seconds !== 0 || minutes !== 0 || hours !== 0) {
        var continueButton = document.getElementById("continue");
        continueButton.setAttribute("hidden", "true");
        var fulltime = document.getElementById("fulltime");
        var time = gethours + mins + secs;
        fulltime.innerHTML = "Time Recorded is " + time;
        seconds = 0;
        minutes = 0;
        hours = 0;
        secs = "0" + seconds;
        mins = "0" + minutes + ": ";
        gethours = "0" + hours + ": ";

        var x = document.getElementById("timer");
        var stopTime = gethours + mins + secs;
        x.innerHTML = stopTime;

        var showStart = document.getElementById("start");
        showStart.style.display = "inline-block";
        var showStop = document.getElementById("stop");
        showStop.style.display = "inline-block";
        var showPause = document.getElementById("pause");
        showPause.style.display = "inline-block";

        clearTimeout(clearTime);
    }
}
window.addEventListener("load", function () {
    var stop = document.getElementById("stop");
    stop.addEventListener("click", stopTime);
});

function pauseTime() {
    if (seconds !== 0 || minutes !== 0 || hours !== 0) {
       
        var x = document.getElementById("timer");
        var stopTime = gethours + mins + secs;
        x.innerHTML = stopTime;

        var showStop = document.getElementById("stop");
        showStop.style.display = "inline-block";

        clearTimeout(clearTime);
    }
}

var pause = document.getElementById("pause");
pause.addEventListener("click", pauseTime);

function continueTime() {
    if (seconds !== 0 || minutes !== 0 || hours !== 0) {
        
        var x = document.getElementById("timer");
        var continueTime = gethours + mins + secs;
        x.innerHTML = continueTime;

        var showStop = document.getElementById("stop");
        showStop.style.display = "inline-block";
        
        clearTimeout(clearTime);
        clearTime = setTimeout("startWatch( )", 1000);
    }
}

window.addEventListener("load", function () {
    var cTime = document.getElementById("continue");
    cTime.addEventListener("click", continueTime);
});
