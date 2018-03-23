let girl;
let pet;

function preload() {
  girl = loadImage('images/triste.png');
  pet = loadImage('images/patches.png')
}

function setup() {
  createCanvas(windowWidth / 1.5, windowHeight / 1.5);
}

function draw() {
  background(100, 185, 225);
  image(girl, -50, 110, girl.width / 3, girl.height / 3);

  fill(255);
  ellipse(250, 250, 150, 100);
  /*speach bubble*/

  fill(141, 212, 70);
  ellipse(width / 2 + 80, height / 2 - 100, 200, 200);

  fill(190, 20, 130);
  rect(width / 2 + 180, height / 2, 250, 200);


  if (mouseX > width / 2 && mouseY < height / 2 + 20 && mouseX < width / 2 + 200) {
    fill(0);
    text('Hmm, not here.', 200, 250);
  } else if (mouseX > width / 2 + 250 && mouseY > height / 2 && mouseX < width/2 + 400) {
    fill(0);
    text('Oh! There you are!', 200, 250);
    image(pet, width / 2 + 180, height / 2-30, pet.width / 3.5, pet.height / 3.5);
  } else {
    fill(0);
    text("Where'd he go off to?", 190, 255);
  }
}
