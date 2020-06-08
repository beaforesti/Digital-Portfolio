var col1 = '#e8680f';
var col2 = '#eb8c31';


function preload() {
  //  myFont = loadFont('assets/SuisseSign-Thin.otf');
  flower = loadImage('assets/fiori2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255);
  noStroke();

  //Buttons
  button1 = createButton("Progettazione grafica");
  button1.position(windowWidth / 3, windowHeight / 10 * 4.5);
  button1.mousePressed(openGraphic);
  button1.style('background-color', "#eb8c31");
  button1.mouseOver(changeColor1);
  button1.mouseOut(beginningColor1);


  button2 = createButton("Tipografia");
  button2.position(windowWidth / 3, windowHeight / 10 * 5.5);
  button2.mousePressed(openTypo);
  button2.style('background-color', "#ef7a31");
  button2.mouseOver(changeColor2);
  button2.mouseOut(beginningColor2);

  button3 = createButton("Video");
  button3.position(windowWidth / 3, windowHeight / 10 * 6.5);
  button3.mousePressed(openDraw);
  button3.style('background-color', "#dd6635");
  button3.mouseOver(changeColor3);
  button3.mouseOut(beginningColor3);

  button4 = createButton("Coding");
  button4.position(windowWidth / 3, windowHeight / 10 * 7.5);
  button4.mousePressed(openDraw);
  button4.style('background-color', "#e9492c");
  button4.mouseOver(changeColor3);
  button4.mouseOut(beginningColor3);

  button5 = createButton("Disegni");
  button5.position(windowWidth / 3, windowHeight / 10 * 8.5);
  button5.mousePressed(openDraw);
  button5.style('background-color', "#e1414d");
  button5.mouseOver(changeColor3);
  button5.mouseOut(beginningColor3);

  //same styling through "button" selector
  selectAll("button").forEach(item => {
    item.size(windowWidth / 3, 100);
    // item.style('background-color', "#e1414d");
    item.style("color", "#ffffff");
    item.style("border-color", "#ffffff");
    item.style("font-size", "30px");
    item.style("font-color", "white");
    item.style("font-family", "Nunito");
  });


}

function draw() {
  push()
  fill(color ("#e9492e"));
  rect(0, 0, windowWidth, windowHeight / 2.8);
  pop()

  push()
  stroke('#e8680f');
  strokeWeight(10);
  line(0, windowHeight / 10 * 7, windowWidth, windowHeight / 10 * 7);
  pop()

  push()
  var myText = "Portfolio";
  //textFont("SuisseSign-Thin");
  textFont("Nunito");
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text(myText, windowWidth / 4 , windowHeight / 4);
  pop()

  push()
  var myText2 = "Beatrice \nForesti";
  //textFont("SuisseSign-Thin");
  textFont("Nunito");
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text(myText2, windowWidth / 4 * 3, windowHeight / 4);
  pop()

  imageMode(CENTER);
  image(flower, windowWidth / 2, windowHeight / 10 * 3, flower.width / 3, flower.height / 3);

  // push()
  //  var myText2 = "Progettazione grafica";
  // //textFont("SuisseSign-Thin");
  // textFont("Nunito");
  // textAlign(CENTER);
  // textSize(40);
  // fill(255);
  // text(myText2, width/2, 3 * height/4);
  // pop()

}

function openGraphic() {
  window.open("graphic.html", "_self");
}

function openTypo() {
  window.open("typo.html", "_self");
}

function openDraw() {
  window.open("draw.html", "_self");
}

//All these create an hover effect on the buttons
function changeColor1() {
  button1.style('background-color', "#f3ba83");
}

function changeColor2() {
  button2.style('background-color', "#f5af83");
}

function changeColor3() {
  button3.style('background-color', "#ed8d94");
}

function beginningColor1() {
  button1.style('background-color', "#eb8c31");
}

function beginningColor2() {
  button2.style('background-color', "#ef7a31");
}

function beginningColor3() {
  button3.style('background-color', "#dd6635");
}

function windowResized() {
  //resizing the canvas when the window is resized
  resizeCanvas(windowWidth, windowWidth);
}
