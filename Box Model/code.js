var image = document.querySelector("img");
var contentButton = document.querySelector("#content");
var paddingButton = document.querySelector("#padding");
var borderButton = document.querySelector("#border");
var marginButton = document.querySelector("#margin")


function contentClick(){
    image.classList.toggle("content");
    contentButton.classList.toggle("clicked");
}

function paddingClick(){
    image.classList.toggle("padding");
    paddingButton.classList.toggle("clicked");
}

function borderClick(){
    image.classList.toggle("border");
    borderButton.classList.toggle("clicked");
}

function marginClick(){
    image.classList.toggle("margin");
    marginButton.classList.toggle("clicked");
}