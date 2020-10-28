var Aman, Garima;


function setup() {
  createCanvas(800,400);

  Aman =createSprite(400, 200, 50, 50);
  Aman.shapeColor = "green";

  

  Garima = createSprite(250,250,60,100)
  Garima.shapeColor = "purple";


  
}

function draw() {
  background("yellow");

  Garima.x = mouseX;
  Garima.y = mouseY;

  if (Garima.x-Aman.x<Garima.width/2+Aman.width/2 && Aman.x-Garima.x<Aman.width/2+Garima.width/2 && 
    Garima.y-Aman.y<Garima.height/2+Aman.height/2 && Aman.y-Garima.y<Aman.height/2+Garima.height/2) {
    Aman.shapeColor = "blue";
    Garima.shapeColor = "blue";
  }



  else{
    Aman.shapeColor = "green";
    Garima.shapeColor = "purple";
  }

  drawSprites();
}