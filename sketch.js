var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
 movingRect= createSprite(300, 200, 50, 50);
 fixedRect= createSprite(200, 100, 40, 40);
 movingRect.shapeColor="red";
 fixedRect.shapeColor="red";

}

function draw() {
  background("black");  
movingRect.x=mouseX;
movingRect.y=mouseY;
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="blue"

  }
else{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red"

}

  drawSprites();
}