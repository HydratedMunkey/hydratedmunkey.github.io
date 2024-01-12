// Extract Elements from HTML
const die1 = document.getElementById("die1");

const die2 = document.getElementById("die2");

const die3 = document.getElementById("die3");

const die4 = document.getElementById("die4");

const die5 = document.getElementById("die5");

const die6 = document.getElementById("die6");

const sequentialButton = document.getElementById("sequential-order");
const randomButton = document.getElementById("random-order");
let currentDie = 0;
let randomNumber = 0;

// Create function to generate die in order
function sequentialDie(){

    // Reset content on canvas
    die1.getContext("2d").clearRect(0, 0, die1.clientWidth, die1.clientHeight);

    // Iterate to get to next die
    currentDie = currentDie + 1;

    // Reset die if above 6
    if(currentDie > 6){
        currentDie = 1;
    }

    // Call function to draw die using previous number
    drawDot(currentDie, die1);
}

// Create function to generate random number and roll dice based on that number
function randomDie(){

    // Clear canvas of any remaining content
    die2.getContext("2d").clearRect(0, 0, die2.clientWidth, die2.clientHeight);

    // Generate random number
    randomNumber = Math.floor(Math.random() * 6) + 1;

    // Call function to draw die using previous number
    drawDot(randomNumber, die2);
}

// Create function to draw dies
function drawDot(dieNumber, canvas){
    
    // Create Variables
    let dieRadii = canvas.clientWidth / 10;
    let drawDie = canvas.getContext("2d");

    // Determine position based on die number
    if(dieNumber == 1 || dieNumber == 3 || dieNumber == 5){
        drawDie.beginPath();
        drawDie.arc(canvas.clientWidth / 2, canvas.clientHeight / 2, dieRadii, 0, 2 * Math.PI, false);
        drawDie.fill();
        drawDie.closePath();
    } 
    if(dieNumber == 2 || dieNumber == 3 || dieNumber == 4 || dieNumber == 5 || dieNumber == 6) {
        drawDie.beginPath();
        drawDie.arc(canvas.clientWidth / 4, canvas.clientHeight / 4, dieRadii, 0, 2 * Math.PI, false);
        drawDie.fill();
        drawDie.closePath();

        drawDie.beginPath();
        drawDie.arc(canvas.clientWidth * 3/4, canvas.clientHeight * 3/4, dieRadii, 0, 2 * Math.PI, false);
        drawDie.fill();
        drawDie.closePath();
    }
    if(dieNumber == 4 || dieNumber == 5 || dieNumber == 6){
        drawDie.beginPath();
        drawDie.arc(canvas.clientWidth * 3/4, canvas.clientHeight / 4, dieRadii, 0, 2 * Math.PI);
        drawDie.fill();
        drawDie.closePath();

        drawDie.beginPath();
        drawDie.arc(canvas.clientWidth / 4, canvas.clientHeight * 3/4, dieRadii, 0, 2 * Math.PI);
        drawDie.fill();
        drawDie.closePath(); 
    }
    if(dieNumber == 6){
        drawDie.beginPath();
        drawDie.arc(canvas.clientWidth / 4, canvas.clientHeight / 2, canvas.clientWidth / 10, 0, 2 * Math.PI);
        drawDie.fill();
        drawDie.closePath();

        drawDie.beginPath();
        drawDie.arc(canvas.clientWidth * 3/4, canvas.clientHeight / 2, canvas.clientWidth / 10, 0, 2 * Math.PI);
        drawDie.fill();
        drawDie.closePath();
    }

}
