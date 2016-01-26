//1. Bullseye

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  ellipse (100,100,100,100);
  ellipse (100,100,80,80);
  ellipse (100,100,60,60);
  ellipse (100,100,40,40);
  ellipse (100,100,20,20);

  fill ("red");
  rect (300,300,50,50);
  fill ("green");
  rect (360,300,50,50);
  fill ("blue");
  rect(300,360,50,50);
  fill("yellow");
  rect (360,360,50,50);

  line(200,200,250,250);
  line(200,250,250,200);

  fill("black");
  rect(500,100,200,200);
  fill("white");
  rect(525,125,150,150);
  fill("lightblue");
  stroke("cadetblue");
  strokeWeight("2");
  ellipse(550,150,30,30);
  fill("lightblue");
  stroke("cadetblue");
  strokeWeight("2");
  ellipse(600,200,30,30);
  fill("lightblue");
  stroke("cadetblue");
  strokeWeight("2");
  ellipse(650,250,30,30);
  fill("lightblue");
  stroke("cadetblue");
  strokeWeight("2");
  ellipse(550,250,30,30);
  fill("lightblue");
  stroke("cadetblue");
  strokeWeight("2");
  ellipse(650,150,30,30);

  fill("lightblue");
  stroke("lightblue");
  rect(800,100,200,420);
  fill("white")
  stroke("grey")
  ellipse(900,400,160,160);
  fill("white")
  stroke("grey")
  ellipse(900,275,130,130);
  fill("white")
  stroke("grey")
  ellipse(900,175,100,100);
  fill("black");
  stroke("black");
  ellipse(880,175,12,12);
  fill("black");
  stroke("black");
  ellipse(920,175,12,12);
  fill("orange");
  noStroke();
  triangle(900,220,890,191,910,191)

}
