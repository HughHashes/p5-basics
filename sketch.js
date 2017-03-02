var a = 100;
var b = 100;
var newHeight = 50;
var newWidth = 50;
var ranRgb;
var ranRgb2;
var ranRgb3;
var ranBack;
var ranBack2;
var ranBack3;

function setup(){
    ranBack = random(0, 255);
    ranBack2 = random(0, 255);
    ranBack3 = random(0, 255);
    createCanvas(600, 400);
    background(ranBack, ranBack2, ranBack3);
    

}

//loops forever
function draw(){
    //background(150);
    if(mouseIsPressed){
        ranRgb = random(0, 255);
        ranRgb2 = random(0, 255);
        ranRgb3 = random(0, 255);
        noStroke();
        fill(ranRgb, ranRgb2, ranRgb3, 50);
        ellipse(mouseX, mouseY, newWidth, newHeight);
    }
    
}