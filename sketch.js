var a = 100;
var b = 100;
var newHeight = 50;
var newWidth = 50;

function setup(){
    createCanvas(600, 400);
    background(163, 19, 198);
    

}

//loops forever
function draw(){
    //background(150);
    if(mouseIsPressed){
        noStroke();
        fill(225, 255, 0, 100);
        ellipse(mouseX, mouseY, newWidth, newHeight);
    }
    
}