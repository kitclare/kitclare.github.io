let img;
let x = 0;
let speed = 3;

function preload( ){
  img=loadImage('images/mariocloud.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  /*clear background*/
  image(img, x, 0, img.width/2, img.height/2);
  x = x + speed;
    if (x > width-200 || x < 0){
      speed= -speed;
    }
}
// function draw() {
//   background(100, 185, 225);
//   image(img, x, 0, img.width/2, img.height/2);
//     if(x <= width) {
//     x++
//     }
//     else {
//     x=-200;
//     }
// }
