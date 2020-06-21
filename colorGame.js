window.setTimeout(function(){
    var mode = 6;
var colors= generateRandomColors(mode);

var sq= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisp= document.querySelector("#colorDisp");
var messageDisp = document.querySelector("#message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var scoreDisp = document.querySelector("#scoreDisp"); 
var scoreCount = 0;
var k=1;


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    mode = 3;
    colors= generateRandomColors(mode);
    pickedColor= pickColor();
    colorDisp.textContent = pickedColor;
    heading.style.backgroundColor = "coral";
    messageDisp.textContent = "";
    k = 1;
    for(var i=0; i<sq.length; i++)
    {
        if(colors[i])
        {
            sq[i].style.backgroundColor= colors[i];
        }
        else
        {
            sq[i].style.display="none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    mode = 6;
    colors= generateRandomColors(mode);
    pickedColor= pickColor();
    colorDisp.textContent = pickedColor;
    heading.style.backgroundColor = "coral";
    messageDisp.textContent = "";
    k=1;
    for(var i=0; i<sq.length; i++)
    {
        if(colors[i])
        {
            sq[i].style.backgroundColor= colors[i]; 
            sq[i].style.display="block";
        }  
    }
})



resetButton.addEventListener("click", reset);

function reset()
{
    // generate all new colors
    colors= generateRandomColors(mode);
    // pick a new random color from array
     pickedColor= pickColor();
    // change color display to picked color
    colorDisp.textContent = pickedColor;
    // change colors of squares
    for(var i=0; i<sq.length; i++)
{
    sq[i].style.backgroundColor= colors[i];
}

    resetButton.textContent = "New Colors";
    heading.style.backgroundColor = "coral";
    messageDisp.textContent = "";
    k=1;
}


colorDisp.textContent = pickedColor;

for(var i=0; i<sq.length; i++)
{
    sq[i].style.backgroundColor= colors[i];

    sq[i].addEventListener("click", function()
    {
        // grab color of the clicked square
        var clickedColor = this.style.backgroundColor;
        
        // compare color to pickedColor
        if(k===1)
        {
            if(clickedColor === pickedColor )
            {   
            messageDisp.textContent= "Correct";
            changeColors(clickedColor);
            resetButton.textContent = "Play Again ?";
            scoreCount++;
            scoreDisp.textContent = scoreCount;
            k++;
            }
            else
            {
            messageDisp.textContent= "Try Again ";
            this.style.backgroundColor= "#232323";
            }
        } 
    })
}

function changeColors(colors)
{
    for(var i=0; i <sq.length; i++)
    {
        sq[i].style.backgroundColor = colors;
    }         
    heading.style.backgroundColor= colors;
    
}

function pickColor()
{
  var random=  Math.floor(Math.random() * colors.length) ;
  return colors[random];
}

function generateRandomColors(num)
{
    // make an array
    var arr = [];
    // add num random colors to array
    for(var i=0; i< num; i++)
    {
        arr.push(randomColor());
    }

    //return the array
    return arr;
}

function randomColor()
{
 var r =   Math.floor(Math.random() * 256);
 var g =   Math.floor(Math.random() * 256);
 var b =   Math.floor(Math.random() * 256);


return "rgb("+  r + ", " + g + ", " + b + ")" ;
}






}, 500)