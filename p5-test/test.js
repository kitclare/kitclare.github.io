let rectangle;
let rectangleX;
let rectangleY;

let rectangles = [];

function setup(){
  createCanvas(800,800);

}

function mousePressed(){
  rectangles.push({posX: mouseX, posY: mouseY, color: random(255)})

}

function draw(){
  background(100,230,80);

  for (let i = 0; i < rectangles.length; i++){
    fill(rectangles[i].color);
    rect(rectangles[i].posX, rectangles[i].posY, 100, 100);
    rectangles[i].posY += 4;


  }
}
