// Extract Elements from HTML
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die3 = document.getElementById("die3");
const die4 = document.getElementById("die4");
const die5 = document.getElementById("die5");
const die6 = document.getElementById("die6");
const die7 = document.getElementById("die7");
const die8 = document.getElementById("die8");
const die9 = document.getElementById("die9");
const die10 = document.getElementById("die10");
const die11 = document.getElementById("die11");
const die12 = document.getElementById("die12");
const player1Msg = document.getElementById("player1Message");
const player2Msg = document.getElementById("player2Message");
const explanationToggle = document.getElementById("explanation-toggle");
const explanationDiv = document.getElementById("explanation");
const restartBtn = document.getElementById("restart-button");
const rollBtn = document.getElementById("roll-button");
const p2Dice = document.getElementById("player2-dice")
const p1WDisplay = document.getElementById("p1Wins");
const p2WDisplay = document.getElementById("p2Wins");
const restartToggle = document.getElementById("restart-toggle");
let playerDisplay = document.getElementById("p1Score");

// Set variables for later use
let gameHasStarted = false;
let dieKept = true;
let availableSlot = 0;
let threeRolled = false;
let turnOver = false;
let threeDie = 0;
let rolls = 6;
let p1Score = 0;
let score = 0;
let scoreDisplay = "Player 1 Score: "
let playerTurn = 1;
let p1Wins = 0;
let p2Wins = 0;

// Create lists 
let allDies = [die1, die2, die3, die4, die5, die6, die7, die8, die9, die10, die11, die12];
let dieList = [die1, die2, die3, die4, die5, die6];
let dieValues = [];

// Create function to generate a random number and roll a die based on that number
function randomDie(canvas){
    
    // Clear canvas of any remaining content
    canvas.getContext("2d").clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    
    // Generate random number
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Call function to draw die using previous number
    drawDot(randomNumber, canvas);

    // Add value to list
    dieValues.push(randomNumber);
    
    return randomNumber;

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

// Create function to roll dice
function rollDice(){
    if(dieKept == true){

        // Reset 
        threeRolled = false;
        dieValues = [];

        // Call function to roll each die
        for(let index = 0; index < rolls; index = index + 1){
            let value = randomDie(dieList[index]);
            if(value == 3){
                threeDie = index;
                threeRolled = true;
            } else {
                dieList[index].style.background = "aquamarine";
            }

        }
        
        // Determine how the dice should be colored
        if(threeRolled){
            for(let die of dieList){
                if(dieValues[dieList.indexOf(die)] != 3){
                    die.style.background = "coral"
                    die.style.cursor = "not-allowed";
                } else {
                    die.style.background = "aquamarine";
                    die.style.cursor = "pointer";
                }
            }
        } else {
            for(let die of dieList){
                die.style.cursor = "pointer";
            }
        }
        
        // Change status
        gameHasStarted = true;
        dieKept = false;

    }
}

// Create function to move die 
function keepDie(dieCanvas){
    
    // Determine if a die has been kept already and game has started
    if(dieKept == false && gameHasStarted == true){

        // Choose die to move to kept list
        if(threeRolled){    

            // Change background and disable its functionality
            dieList[threeDie].style.background = "lightblue";
            dieList[threeDie].style.pointerEvents = "none";
            dieList[threeDie].style.cursor = "not-allowed";
            
            // Calculate score and remove die from list
            score = score + 3;
            playerDisplay.textContent = scoreDisplay + score;
            dieList.splice(threeDie, 1);
            
        } else {

            // Change background
            dieCanvas.style.background = "lightblue";
            dieCanvas.style.pointerEvents = "none";
            dieCanvas.style.cursor = "not-allowed";
            
            // Calculate score
            score = score + dieValues[dieList.indexOf(dieCanvas)];
            playerDisplay.textContent = scoreDisplay + score;
            dieList.splice(dieList.indexOf(dieCanvas), 1);
        }
        
        // Move destination to next Kept Die slot
        availableSlot = availableSlot + 1
        rolls = rolls - 1;

        // Reset everything for next player turn
        if(availableSlot == 6 && playerTurn == 1){
            turnOver = true;
            rolls = 6;
            dieList = [die7, die8, die9, die10, die11, die12];
            threeDie = 0;
            p1Score = score;
            availableSlot = 0;
            score = 0;
            playerDisplay = document.getElementById("p2Score");
            scoreDisplay = "Player 2 Score: "
            playerTurn = 2;
            for(let die of allDies){
                die.style.pointerEvents = "all";
            }
        } else if (availableSlot == 6 && playerTurn == 2){

            // End the game
            if(p1Score > score){
                player1Msg.textContent = "Player 1: LOSER";
                player2Msg.textContent = "Player 2: WINNER"
                p2Wins = p2Wins + 1;
            } else if(p1Score < score){
                player1Msg.textContent = "Player 1: WINNER";
                player2Msg.textContent = "Player 2: LOSER"
                p1Wins = p1Wins + 1;
            } else{
                player1Msg.textContent = "Player 1: TIE";
                player2Msg.textContent = "Player 2: TIE";
            }

            // Update each players win counter
            p1WDisplay.textContent = "Player 1 Wins: " + p1Wins;
            p2WDisplay.textContent = "Player 2 Wins: " + p2Wins
            
            // Display restart game button and hide roll dice button if restarting is enabled
            restartBtn.style.display = "inline-block";  
            rollBtn.style.display = "none";
            
        }
        
        // Change variable so more than one die can't be kept on a round
        dieKept = true;
    } 
}

// Set up everything for next round
function restartGame(){

    if(restartToggle.checked){
        for(let die of allDies){
            // Player 1's dice should be clickable, but not player 2's
                if(allDies.indexOf(die) < 6){
                    die.style.pointerEvents = "all";
                }
    
            // Clear each canvas
            die.getContext("2d").clearRect(0, 0, die.clientWidth, die.clientHeight);
        }
    
        // Reset each value 
        turnOver = false;
        rolls = 6;
        dieList = [die1, die2, die3, die4, die5, die6];
        threeDie = 0;
        score = 0;
        p1Score = 0;
        availableSlot = 0;
        playerDisplay = document.getElementById("p1Score");
        document.getElementById("p1Score").textContent = "Player 1 Score: ";
        document.getElementById("p2Score").textContent = "Player 2 Score: ";
        scoreDisplay = "Player 1 Score: ";
        player1Msg.textContent = "Player 1's Dice";
        player2Msg.textContent = "Player 2's Dice";
        playerTurn = 1;
        dieKept = true;
    
        // Display roll dice button and hide restart game button 
        rollBtn.style.display = "inline-block";
        restartBtn.style.display = "none";
    }
}

// Toggle explanation visibility based on if setting was checked
function toggleExplanation(){
    if(explanationToggle.checked == true){
        explanationDiv.style.display = "block";
    } else {
        explanationDiv.style.display = "none";
    }
}