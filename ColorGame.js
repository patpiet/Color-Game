var numSquares= 6;
var pickedColor = random();
var colors = getRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.getElementById("reset");
var buttons = document.querySelectorAll(".buttons");

colorDisplay.textContent = pickedColor;

for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        buttons[0].classList.remove("selected");
        buttons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="Easy"){
            numSquares=3;
        }else{
            numSquares= 6;
        }
        reset();
    })
}

resetButton.addEventListener("click", function(){
    reset();
})

for(var i=0; i<squares.length; i++){
    //color a square
    squares[i].style.backgroundColor = colors[i];
    //  eventListener checks picked color
    squares[i].addEventListener("click", function(){
        //grab clicked color
        var clickedColor= this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
            h1.style.backgroundColor= clickedColor;
            resetButton.textContent="Reset";
        }else{
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent = "Try Again!";
        };
    })
}

function changeColor(clickedColor){
for(var i=0; i<squares.length;i++){
    squares[i].style.backgroundColor = clickedColor;
}
}

function random(){
    var changed = Math.floor(Math.random() * colors.length);
    return colors[changed];
}

function getRandomColors(num){
    var arr=[];
    for(var i=0; i<num;i++){
    arr.push(getColor());
    }
    return arr;
}

function getColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
    resetButton.textContent="New Colors";
    colors = getRandomColors(numSquares);
    pickedColor = random();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}