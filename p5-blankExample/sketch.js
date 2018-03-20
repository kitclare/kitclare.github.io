function setup(){
createCanvas(500,600);
}

function draw(){
  background(85,203,180);

fill(150);
rect(width/2-120,height/2+100,250,400,9);

fill(30);
rect(width/2-70,height/2,140,400);
/*body*/

fill(10);
rect(width/2+60,height/2-60,50,250,6);
rect(width/2-100,height/2-10,50,200,6);
/*hair*/

noStroke();
fill(206,178,139);
ellipse(width/2,height/2,190,200);
ellipse(width/2+90,height/2+10,35,30);
/*head*/

fill(0);
ellipse(width/2+40,height/2-10,20,25)
ellipse(width/2-40,height/2-10,20,25)

noFill();
stroke(0);
strokeWeight(3);
curve(230, 280, 225, 360, 280, 350, 230, 280);

fill(255);
noStroke();
ellipse(width/2+45,height/2-15,10,10);
/*face*/

stroke(10);
strokeWeight(2);
fill(30);
rect(width/2-60,height/2+80,125,60,5);
/*collar*/

fill(15);
rect(width/2-10,height/2+80,20,300,5);
/*zipper*/

noStroke();
fill(10);
rect(width/2-100,height/2-60,100,90,5);
rect(width/2-100,height/2-110,210,70,20);

/*bangs*/
noStroke();
fill(200,85,125);
ellipse(mouseX,mouseY,20,20);



}
