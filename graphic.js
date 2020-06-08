var col0 = '#E8680F';
var col1 = '#eb8c31';
var graphic1;
var graphic2;

function preload() {
  //  myFont = loadFont('assets/SuisseSign-Thin.otf');
  graphic1 = loadImage('assets/graphic/graphic1_ES03C2_ForestiBeatrice.gif');
  graphic2 = loadImage('assets/graphic/graphic2_cornice.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(color(col1));
  noStroke();
}

function draw() {
  image(graphic1, 10, 10, graphic1.width, graphic1.height);
  image(graphic2, graphic1.width+20, 10, graphic2.width/3, graphic2.height/3);
}
