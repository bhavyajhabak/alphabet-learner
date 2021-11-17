var bg;
var alphabetA;
var alphabetB;
var alphabetB1;
var alphabetC;
var alphabetD;
var alphabetE;
var alphabetF;
var alphabetG;
var alphabetH;
var alphabetI;
var alphabetJ;
var alphabetK;
var alphabetL;
var alphabetM;
var alphabetN;
var alphabetO;
var alphabetQ;
var alphabetR;
var alphabetS;
var alphabetT;
var alphabetU;
var alphabetV;
var alphabetW;
var alphabetX;
var alphabetY;
var alphabetZ;



function preload() {

bg = loadImage("images/background.jpg");
alphabetB = loadImage("images/alphabetB.jpg");
}


function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  alphabetB = createSprite(50,160,20,50);
  alphabetB.addImage("alphabetB");
}


  

function draw() {
  background(bg);


  textSize(25);
  fill("black");
  text("Note: press any letter between A-Z.",550,35);

  if(keyDown("UP_ARROW")){
    alphabetB.addImage("alphabetB",B1);
    alphabetB.X = 800;
    alphabetB.Y = 450;
  }
  drawSprites();
  }







