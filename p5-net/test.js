let words = ["I don't wanna bother them with my problems.", "I'd just be a burden.", "Is it ok to tell them?", "What if they think I'm clingy?", "They probably have other things to worry about.", "I'd probably just annoy them.", "Maybe I shouldn't say anything..."];

function preload() {
  myFont = loadFont("font/Gaegu-Regular.ttf");
  img = loadImage('images/img.png');
  img2 = loadImage('images/img2.png');
  img3 = loadImage('images/img3.png');
  story = loadImage('images/story.png');
  story2 = loadImage('images/story2.png');
  story3 = loadImage('images/story3.png');
  story4 = loadImage('images/story4.png');
  story5 = loadImage('images/story5.png');
  story6 = loadImage('images/story6.png');
  black = loadImage('images/black.png');
  black2 = loadImage('images/black2.png');
  black3 = loadImage('images/black3.png');
  black4 = loadImage('images/black4.png');
  black5 = loadImage('images/black5.png');
  black6 = loadImage('images/black6.png');
  blackBox = loadImage('images/blackbox.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  setInterval(printWords, 500);
  setInterval(startSketch, 180000);
}

function startSketch() {
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
  text('NOT', width / 2 - 60, height / 2);
  fill(255, 0, 0);
  textSize(100);
  text("I'm", width / 2 - 200, height / 2);
  text("fine.", width / 2 + 90, height / 2);

  fill(255);
  rect(width / 2 - 110, height / 2 - 300, 300, 70, 10);
  fill(0);
  textSize(50);
  text("Are you ok?", width / 2 - 80, height / 2 - 250);

  if (mouseIsPressed && mouseX > 5 && mouseY > 400 && mouseX < 25 && mouseY < 425) {
    image(img2, width / 2 - 100, height / 2 + 10, img.width / 3, img.height / 3);
  } else if (mouseIsPressed && mouseX > width / 2 - 100 && mouseY > height / 2 + 10 && mouseX < width / 2 + 170 && mouseY < height) {
    image(img3, width / 2 - 100, height / 2 + 10, img.width / 3, img.height / 3);
  } else {
    image(img, width / 2 - 100, height / 2 + 10, img.width / 3, img.height / 3);
  }

  if (mouseX > 5 && mouseY > 5 && mouseX < 25 && mouseY < 25) {
    fill(0);
    rect(5, 5, 20, 20);
  }
  if (mouseX > width / 2 - 475 && mouseY > height / 2 - 145 && mouseX < width / 2 - 455 && mouseY < height / 2 - 125) {
    fill(0);
    rect(width / 2 - 475, height / 2 - 145, 20, 20);
  }
  if (mouseX > 5 && mouseY > height / 2 + 60 && mouseX < 25 && mouseY < height / 2 + 80) {
    fill(0);
    rect(5, height / 2 + 60, 20, 20);
  }
  if (mouseX > width / 2 + 460 && mouseY > height / 2 - 320 && mouseX < width / 2 + 480 && mouseY < height / 2 - 300) {
    fill(0);
    rect(width / 2 + 460, height / 2 - 320, 20, 20);
  }
  if (mouseX > width / 2 + 285 && mouseY > height / 2 - 145 && mouseX < width / 2 + 305 && mouseY < height / 2 - 125) {
    fill(0);
    rect(width / 2 + 285, height / 2 - 145, 20, 20);
  }
  if (mouseX > width / 2 + 435 && mouseY > height / 2 + 105 && mouseX < width / 2 + 455 && mouseY < height / 2 + 125) {
    fill(0);
    rect(width / 2 + 435, height / 2 + 105, 20, 20);
  }

}

function mousePressed() {
  if (mouseX > width / 2 - 110 && mouseY < height / 2 - 230 && mouseX < width / 2 + 190) {
    image(story, 0, 0, img.width / 3, img.height / 3);
    fill(100, 100, 100, 50);
    rect(5, 5, 20, 20);
    noFill();
    rect(0, 0, 30, 30);
  }
  if (mouseX > 5 && mouseY > 5 && mouseX < 25 && mouseY < 25) {
    image(story2, width / 2 - 480, height / 2 - 150, img.width / 3, img.height / 3);
    fill(100, 100, 100, 50);
    rect(width / 2 - 475, height / 2 - 145, 20, 20);
    noFill();
    rect(width / 2 - 480, height / 2 - 150, 30, 30);
  }
  if (mouseX > width / 2 - 475 && mouseY > height / 2 - 145 && mouseX < width / 2 - 455 && mouseY < height / 2 - 125) {
    image(story3, 0, height / 2 + 50, img.width / 3, img.height / 3);
    fill(100, 100, 100, 50);
    rect(5, height / 2 + 60, 20, 20);
    noFill();
    stroke(0);
    rect(0, height / 2 + 55, 30, 30);
    noStroke();
  }
  if (mouseX > 5 && mouseY > height / 2 + 60 && mouseX < 25 && mouseY < height / 2 + 80) {
    image(black, 0, 0, img.width / 3, img.height / 3);
    image(black2, width / 2 - 475, height / 2 - 145, img.width / 3, img.height / 3);
    image(black3, 0, height / 2 + 50, img.width / 3, img.height / 3);
    setInterval(box, 5000);
  }

  function box() {
    image(blackBox, 0, 0, img.width / 3, img.height / 3);
    image(blackBox, width / 2 - 475, height / 2 - 145, img.width / 3, img.height / 3);
    image(blackBox, 0, height / 2 + 50, img.width / 3, img.height / 3);
    fill(255, 0, 0);
    rect(350, 310, 20, 20);
    noFill();
    stroke(255, 0, 0);
    rect(345, 305, 30, 30);
    noStroke();
  }

  if (mouseX > 350 && mouseY > 310 && mouseX < 370 && mouseY < 330) {
    image(story4, width / 2 + 450, height / 2 - 380, img.width / 3, img.height / 3);
    stroke(0);
    fill(100, 100, 100, 50);
    rect(width / 2 + 460, height / 2 - 320, 20, 20);
    noFill();
    rect(width / 2 + 455, height / 2 - 325, 30, 30);
  }

  if (mouseX > width / 2 + 460 && mouseY > height / 2 - 320 && mouseX < width / 2 + 480 && mouseY < height / 2 - 300) {
    image(story5, width / 2 + 280, height / 2 - 150, img.width / 3, img.height / 3);
    fill(100, 100, 100, 50);
    rect(width / 2 + 285, height / 2 - 145, 20, 20);
    noFill();
    stroke(0);
    rect(width / 2 + 280, height / 2 - 150, 30, 30);
  }

  if (mouseX > width / 2 + 285 && mouseY > height / 2 - 145 && mouseX < width / 2 + 305 && mouseY < height / 2 - 125) {
    image(story6, width / 2 + 430, height / 2 + 100, img.width / 3, img.height / 4);
    fill(100, 100, 100, 50);
    rect(width / 2 + 435, height / 2 + 105, 20, 20);
    noFill();
    stroke(0);
    rect(width / 2 + 430, height / 2 + 100, 30, 30);
    noStroke();
  }

  if (mouseX > width / 2 + 435 && mouseY > height / 2 + 105 && mouseX < width / 2 + 455 && mouseY < height / 2 + 125) {
    image(black4, width / 2 + 420, height / 2 - 350, img.width / 3, img.height / 3);
    image(black5, width / 2 + 280, height / 2 - 150, img.width / 3, img.height / 3);
    image(black6, width / 2 + 430, height / 2 + 100, img.width / 3, img.height / 3);
    setInterval(morebox, 5000);
    setInterval(printWords, 400);
  }

  function morebox() {
    image(blackBox, width / 2 + 450, height / 2 - 380, img.width / 3, img.height / 3);
    image(blackBox, width / 2 + 280, height / 2 - 150, img.width / 3, img.height / 3);
    image(blackBox, width / 2 + 430, height / 2 + 100, img.width / 3, img.height / 3);
    fill(255, 0, 0);
    rect(width / 2 + 370, 310, 20, 20);
    noFill();
    stroke(255, 0, 0);
    rect(width / 2 + 365, 305, 30, 30);
    noStroke();
  }
  if (mouseX > width / 2 + 370 && mouseY > 310 && mouseX < width / 2 + 390 && mouseY < 330) {
    setInterval(printWords, 100);
  }

}
