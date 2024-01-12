// document.write("Way Cool Coding School");

// document.getElementById("increase-btn").style.background = "black";
// document.getElementById("increase-btn").style.color = "hotpink";
// document.getElementById("increase-btn").style.width = "400px";
// document.getElementById("increase-btn").style.height = "100px";

// Create Variable that holds the entire object . . . button
const btnIncrease = document.getElementById("increase-btn");
const btnDecrease = document.getElementById("decrease-btn");
const btnReset = document.getElementById("reset-btn");
const displayCounter = document.getElementById("counter-display");

// Create and Initalize Variable
let count = 0;

// Changing properties of the increase Button Object
btnIncrease.style.color = "lightgreen";
btnIncrease.style.border = "5px solid lightgreen";

// Changing properties of the decrease Button Object
btnDecrease.style.color = "hotpink";
btnDecrease.style.border = "5px solid hotpink";

// Changing properties of the reset Button Object
btnReset.style.color = "slategray";
btnReset.style.border = "5px solid slategray";

// Change properties of the H2 Object
displayCounter.style.backgroundColor = "dodgerblue";
displayCounter.style.color = "white";
displayCounter.style.border = "3px solid navy";


// Create function to increase count
function increaseCount(){
    
    // Increase with Recursion
    count = count + 1;

    // Display
    displayCounter.textContent = count;
    displayCounter.style.backgroundColor = "green";

}

// Create function to lower count
function decreaseCount(){

    // Decrease with Recursion
    count = count - 1;

    // Display
    displayCounter.textContent = count;
    displayCounter.style.backgroundColor = "hotpink";
}

// Create function to reset count
function resetCount(){

    // Reset count
    count = 0;

    // Display
    displayCounter.textContent = count;
    displayCounter.style.backgroundColor = "slategray";
}