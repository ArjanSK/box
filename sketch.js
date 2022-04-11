var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  if(keyDown("space")){
    box.velocityX=-3
    box.velocityY=-3
  }
  drawSprites();
}




