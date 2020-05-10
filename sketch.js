var car,wall
var speed,weight


function setup() {
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
    car.velocityX = speed;
    car.shapeColor = "black";
  wall = createSprite
  (355,200,60,height/2);
    wall.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  
  wall.shapeColor = color(80,80,80);
  if(Touching(wall,car)){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    } 
    else if(deformation < 180 && deformation > 100){
        car.shapeColor = color(230,230,0);
    }
    else if(deformation < 100){
        car.shapeColor = color(0,255,0);
    }
  }
  
  
  drawSprites();
}


//o1 car , o2 wall
function Touching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2 && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
    return true; 
    } 
    else {
     return false;
    }
}