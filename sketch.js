var bullet,wall,speed,weight,da,thick

function setup() {
  createCanvas(1200,1200);
  speed=random(223,321)
  weight=random(30,52)
  thick=random(22,83)
  bullet=createSprite(50,200,80,20)
  bullet.velocityX =speed
  wall=createSprite(1000,300,thick,height/2)
  da=0.5*weight*speed*speed/(thick*thick*thick)
}

function draw() {
  background(255,255,255);  
  
  if(bullet.isTouching(wall)){
    bullet.velocityX=0  
    
    if(da<10){
      wall.shapeColor=color(0,225,0)
    }
    
    if(da>10){
      wall.shapeColor=color(225,0,0)
    }
  }
  
  drawSprites();
}