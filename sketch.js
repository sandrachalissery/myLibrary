function setup() {
  createCanvas(1200,800); 
  
  fixedRect = createSprite(600,400,50,80); 
  fixedRect.shapeColor = "green"; 
  
  movingRect = createSprite(400,200,80,30); 
  movingRect.shapeColor = "green";

}

function draw() {

  background(0,0,0);  
  
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY;
  
  if (isTouching(movingRect,fixedRect)){
    movingRect.velocityY = -7;
    movingRect.velocityX = -8;
    fixedRect.velocityY = 7;
    movingRect.velocityX = 8;
  }

  drawSprites();
}