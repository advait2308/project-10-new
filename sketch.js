var sea,seaImg;
var ship,shipAnimation;

function preload(){
shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = -4;
  
  ship = createSprite(200,250,10,10);
  ship.addAnimation("ship-1.png",shipAnimation);
  ship.scale = 0.3;
}

function draw() {
  background("white");
 
  if(sea.x <0) {
    sea.x = sea.width/2;
  }

  drawSprites();
}