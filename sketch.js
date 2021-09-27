var virus1,virus2,virus3;
var zombie1,zombie2;
var girl,backgroundimg;
var virus1img,virus2img,virus3img,zombie1img,zombie2img,girlimg;

function preload(){
  backgroundimg = loadImage("hospital.jpg");
  virus1img= loadImage("virus1.png");
  virus2img= loadImage("virus2.png");
  virus3img= loadImage("virus3.png");
  zombie1img= loadImage("zombie1.png");
  zombie2img= loadImage("zombie2.png");
  girlimg= loadImage("girl.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(backgroundimg);
  


  drawSprites();
}

