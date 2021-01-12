//
var rect1,rect2
var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.debug= true;
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.debug= true;

  rect1= createSprite(50, 300, 50, 80);
  rect1.debug= true;
  rect1.shapeColor= "green";

  rect2= createSprite(300, 300, 50, 80);
  rect2.debug= true;
  rect2.shapeColor= "green";

  fixedRect.shapeColor= "green";
  movingRect.shapeColor= "green";


}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  // argument
 if(isTouching(movingRect,rect1)){
  rect1.shapeColor= "green";
  movingRect.shapeColor= "green";
 }else{
  rect1.shapeColor= "red";
  movingRect.shapeColor= "red";
 }

  

  drawSprites();
}

//parameter
function isTouching(object1,object2){
  if(object1.x-object2.x< object2.width/2+object1.width/2 &&
    object2.x-object1.x< object2.width/2+object1.width/2 &&
    object1.y-object2.y< object2.height/2+object1.height/2 &&
    object2.y-object1.y< object2.height/2+object1.height/2) {

      return true;


  }
  else {
    return false;

  }
}

function bounceOff(object1,object2){


}