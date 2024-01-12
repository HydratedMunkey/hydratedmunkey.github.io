// Extract Content from Webpage
const tileContainer = document.getElementById("container");

// Create Variables
let directionHasChanged = false;

// Create functions to alter certain flex properties
function direction(){

    if(directionHasChanged == false){
        tileContainer.style.flexDirection = "row-reverse";
        tileContainer.style.justifyContent = "flex-end"
        directionHasChanged = true;
    } else {
        tileContainer.style.flexDirection = "row";
        tileContainer.style.justifyContent = "flex-start"
        directionHasChanged = false;
    }

}

function start(){
    tileContainer.style.justifyContent = "start";
}

function center(){
    tileContainer.style.justifyContent = "center";
}

function end(){
    tileContainer.style.justifyContent = "end";
}

function spaceBetween(){
    tileContainer.style.justifyContent = "space-between";
}

function spaceAround(){
    tileContainer.style.justifyContent = "space-around";
}

function spaceEvenly(){
    tileContainer.style.justifyContent = "space-evenly";
}