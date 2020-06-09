var col0 = '#E8680F';
var col1 = '#eb8c31';
var graphic1;
var graphic2;
var myFont;

function preload() {
  myFont = loadFont('assets/SuisseSign-Thin.otf');
  graphic1 = loadImage('assets/graphic/graphic1_ES03C2_ForestiBeatrice.gif');
  graphic2 = loadImage('assets/graphic/graphic2_cornice.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(color(col1));
  noStroke();
}

function draw() {
  image(graphic1, 900+20, 10, 300, 300);
  image(graphic2, 10, 10, 900, 300);


  push()
  // textFont("SuisseSign-Thin");
  var myText = "La cornice \nSpiegazione del progetto in breve";
  textFont("Nunito");
  textAlign(LEFT);
  textSize(30);
  fill(255);
  text(myText, windowWidth / 5 * 3 , 40);

  // var myText = "La cornice \nSpiegazione del progetto in breve";
  //
  // drawingContext.font = "30px SuisseSign-Thin";
  // drawingContext.textAlign = "left";
  //
  // fill(255);
  // text(myText, windowWidth/5*3, 40);

  pop()
}
