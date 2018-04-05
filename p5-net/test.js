let words = ["I don't wanna bother them with my problems.", "Don't say anything, you'd just be a burden.", "Is it ok to tell them?", "What if they think I'm clingy?", "They probably have other things to worry about."]

function preload() {
  myFont = loadFont("font/Gaegu-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  setInterval(printWords, 600);
}

function draw() {
  textFont(myFont);
  textSize(90);
  fill(0);
  text('NOT', width / 2 - 40, height / 2);
  fill(255, 0, 0);
  textSize(100);
  text("I'm", width / 2 - 180, height / 2);
  text("fine.", width / 2 + 115, height / 2);
}

function mousePressed(){
  if(mouseX > width / 2 && mouseY < height / 2 + 20 && mouseX < width / 2 + 200 && mouseY > height / 2 -50) {
    fill(255);
    textSize(60);
    text("Hey, are you ok?", 20,50);
  }
}

function printWords() {
  fill(0);
  textSize(40);
  text(random(words), random(width) - 60, random(height));
}
