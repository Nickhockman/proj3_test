var img;
function preload(){
img = loadImage("the.png");
}

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(109);
ellipse(50,50,90,20);
  rect(50,70,20,100);
  rect(360,320,110,20);
  rect(290,70,20,100);
  rect(360,120,20,50);
  rect(50,240,20,100);
  rect(160,240,20,100);
  rect(300,240,20,100);
  rect(360,120,20,50);
}
