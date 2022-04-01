var displayArray = ['Alarm Clock', 'Nose', 'Hamburger', 'Butterfly', 'Ambulance'];
var dataArray = ['alarm_clock', 'nose', 'hamburger', 'butterfly', 'ambulance'];
var displayNum = Math.floor((Math.random()*dataArray.length));
var dataNum = Math.floor((Math.random()*dataArray.length));
console.log("Sketch to draw: " + dataArray[displayNum]);
var currentSketch = displayArray[displayNum];
var dataSketch = dataArray[dataNum];
document.getElementById("taskLbl").innerHTML = currentSketch;

var timeCounter = 0;
var timeCheck = "";
var drawnSketch = "";
var sketchAnswer = "";
var scoreCounter = 0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(535, 330);
    background("white");
}


function draw() {
    checkSketch();
    if(drawnSketch == currentSketch){
        sketchAnswer = "set";
        scoreCounter = scoreCounter++;
        document.getElementById("scoreLbl").innerHTML = scoreCounter;
    }
}

function updateCanvas() {
    background("white");
}

function checkSketch() {
    timeCounter++;
    document.getElementById("timeLbl").innerHTML = timeCounter;
    console.log(timeCounter);
    if(timeCounter > 600) {
        timeCounter = 0;
        timeCheck = "completed";
    }
    if(timeCheck == "completed" || sketchAnswer == "set") {
        timeCheck = "";
        sketchAnswer = "";
        updateCanvas();
    }
}