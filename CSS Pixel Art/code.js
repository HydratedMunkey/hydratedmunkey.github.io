// Extract from webpage
const red = document.querySelectorAll(".red");
const black = document.querySelectorAll(".black");
const white = document.querySelectorAll(".white");
const gray = document.querySelectorAll(".gray");
const background = document.querySelectorAll(".cyan");
const redColorPicker = document.querySelector("#redColorPicker");
const whiteColorPicker = document.querySelector("#whiteColorPicker");
const blackColorPicker = document.querySelector("#blackColorPicker");

// Set correct color values
redColorPicker.value = "#FF0000"
blackColorPicker.value = "#000000"
whiteColorPicker.value = "#FFFFFF"

// Set counter variable
let currentPalette = 0;
let backgroundEnabled = false;

// Function to enter color values and change pixel art's colors
function enterColor(color){
    // Determine which colors to change
    if(color == red){
        for(eachRed of red){
            eachRed.style.background = redColorPicker.value;
        }
    } else if(color == black){
        for(eachBlack of black){
            eachBlack.style.background = blackColorPicker.value;
        }
    } else if(color == white){
        for(eachWhite of white){
            eachWhite.style.background = whiteColorPicker.value;
        }
    }
}

// Function to change palette
function changePalette(){

    // Update counter variable
    currentPalette = currentPalette + 1;

    // Determine which colors to change based on current palette
    if(currentPalette == 1){
        for(eachRed of red){
            eachRed.style.background = "purple";
            redColorPicker.value = "#800080"
        }
        for(eachBlack of black){
            eachBlack.style.background = "black";
            blackColorPicker.value = "#000000"
        }
        for(eachWhite of white){
            eachWhite.style.background = "white";
            whiteColorPicker.value = "#FFFFFF"
        }
    } else if(currentPalette == 2){
        for(eachRed of red){
            eachRed.style.background = "yellow";
            redColorPicker.value = "#FFFF00"
        }
        for(eachBlack of black){
            eachBlack.style.background = "black";
            blackColorPicker.value = "#000000"
        }
        for(eachWhite of white){
            eachWhite.style.background = "white";
            whiteColorPicker.value = "#FFFFFF"
        }
    } else if(currentPalette == 3){
        for(eachRed of red){
            eachRed.style.background = "black";
            redColorPicker.value = "#000000"
        }
        for(eachBlack of black){
            eachBlack.style.background = "red";
            blackColorPicker.value = "#FF0000"
        }
        for(eachWhite of white){
            eachWhite.style.background = "white";
            whiteColorPicker.value = "#FFFFFF"
        }
    } else if(currentPalette == 4){
        for(eachRed of red){
            eachRed.style.background = "white";
            redColorPicker.value = "#FFFFFF"
        }
        for(eachBlack of black){
            eachBlack.style.background = "blue";
            blackColorPicker.value = "#0000FF"
        }
        for(eachWhite of white){
            eachWhite.style.background = "yellow";
            whiteColorPicker.value = "#FFFF00"
        }

        // Reset to first palette
        currentPalette = 0;
    }
}

// Function to reset the palette 
function resetPalette(){

    // Reset counter
    currentPalette = 0;

    // Reset values to default
    for(eachRed of red){
        eachRed.style.background = "red";
        redColorPicker.value = "#FF0000"
    }
    for(eachBlack of black){
        eachBlack.style.background = "black";
        blackColorPicker.value = "#000000"
    }
    for(eachWhite of white){
        eachWhite.style.background = "white";
        whiteColorPicker.value = "#FFFFFF"
    }
}

// Function to enable background
function toggleBackground(){

    // Update value
    backgroundEnabled = !backgroundEnabled;
    console.log(backgroundEnabled)

    // Toggle background based on backgroundEnabled value
    if(backgroundEnabled){
        for(eachCyan of background){
            eachCyan.style.background = "cyan";
        }
    } else{
        for(eachCyan of background){
            eachCyan.style.background = "transparent";
        }
    }
}