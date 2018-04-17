let words = ["I don't wanna bother them with my problems.", "I'd just be a burden.", "Is it ok to tell them?", "What if they think I'm clingy?", "They probably have other things to worry about.", "I'd probably just annoy them.", "Maybe I shouldn't say anything..."];

function preload() {
  myFont = loadFont("font/Gaegu-Regular.ttf");
  img = loadImage('images/img.png');
  img2 = loadImage('images/img2.png');
  story = loadImage('images/story.png');
  story2 = loadImage('images/story2.png');
  story3 = loadImage('images/story3.png');
  black = loadImage('images/black.png');
  black2 = loadImage('images/black2.png');
  black3 = loadImage('images/black3.png');
  blackBox = loadImage('images/blackbox.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  setInterval(printWords, 500);
}


function printWords() {
  fill(0);
  textSize(40);
  text(random(words), random(width) - 60, random(height));
}

function draw() {
  textFont(myFont);
  textSize(90);
  fill(0);
  text('NOT', width / 2 - 50, height / 2);
  fill(255, 0, 0);
  textSize(100);
  text("I'm", width / 2 - 190, height / 2);
  text("fine.", width / 2 + 105, height / 2);

  fill(255);
  rect(width / 2 - 110, height / 2 - 300, 300, 70, 10);
  fill(0);
  textSize(50);
  text("Are you ok?", width / 2 - 80, height / 2 - 250);

  if (mouseIsPressed && mouseX > 5 && mouseY > 400 && mouseX < 25 && mouseY < 425) {
    image(img2, width / 2 - 100, height / 2 + 10, img.width / 3, img.height / 3);
  } else {
    image(img, width / 2 - 100, height / 2 + 10, img.width / 3, img.height / 3);
  }
}

function mousePressed() {
  if (mouseX > width / 2 - 110 && mouseY < height / 2 - 230 && mouseX < width / 2 + 190) {
    image(story, 0, 0, img.width / 3, img.height / 3);
    fill(0);
    rect(5, 5, 20, 20);
    noFill();
    rect(0, 0, 30, 30);
  }
  if (mouseX > 5 && mouseY > 5 && mouseX < 25 && mouseY < 25) {
    image(story2, 220, 170, img.width / 3, img.height / 3);
    fill(0);
    rect(210, 185, 20, 20);
    noFill();
    rect(205, 180, 30, 30);
  }
  if (mouseX > 210 && mouseY > 185 && mouseX < 230 && mouseY < 205) {
    image(story3, 0, 400, img.width / 3, img.height / 3);
    fill(0);
    rect(5, 405, 20, 20);
    noFill();
    rect(0, 400, 30, 30);
  }
  if (mouseX > 5 && mouseY > 400 && mouseX < 25 && mouseY < 425) {
    image(black, 0, 0, img.width / 3, img.height / 3);
    image(black2, 220, 170, img.width / 3, img.height / 3);
    image(black3, 0, 400, img.width / 3, img.height / 3);
    setInterval(box, 5000);
  }

  function box() {
    image(blackBox, 0, 0, img.width / 3, img.height / 3);
    image(blackBox, 220, 170, img.width / 3, img.height / 3);
    image(blackBox, 0, 400, img.width / 3, img.height / 3);
  }
}
