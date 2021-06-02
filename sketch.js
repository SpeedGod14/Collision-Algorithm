
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject = createSprite(200,400,50,50)
  gameObject.shapeColor = "orange"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject)){
    movingRect.shapeColor = "blue";
    gameObject.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject.shapeColor = "green"
  }
 

//bounceOff(movingRect, spiralRect)
  drawSprites();
}