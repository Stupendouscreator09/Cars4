var car;
var wall;
var speed,weight;

function setup() {
  createCanvas(1600,800);

  speed = random(55,90);
  weight = random(400,1500);

  

  

  wall = createSprite(950,200,60, 870);
  wall.shapeColor = "blue";

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  line = createSprite(250,260,1500,10);

  car1 = createSprite(50,300,50,50);
  car1.velocityX = speed;

  line1 = createSprite(250,360,1500,10);
  
car2 = createSprite(50,400,50,50);
car2.velocityX = speed;

line2 = createSprite(250,460,1500,10);

car3 = createSprite(50,500,50,50);
car3.velocityX = speed;
  
line3 = createSprite(250,560,1500,10);

  
}

function draw() {
  background(255,255,255); 

if (wall.x - car.x < (car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230,230,0);
}

if(deformation < 100){
  car1.shapeColor = color(0,225,0);
}
}

if (wall.x - car.x < (car1.width+wall.width)/2){
  car1.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    car1.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  car1.shapeColor = color(230,230,0);
}

if(deformation < 100){
  car1.shapeColor = color(0,225,0);
}
}

if (wall.x - car2.x < (car2.width+wall.width)/2){
  car2.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    car2.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  car2.shapeColor = color(230,230,0);
}

if(deformation < 100){
  car2.shapeColor = color(0,225,0);
}
}

if (wall.x - car3.x < (car3.width+wall.width)/2){
  car3.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180){
    car3.shapeColor = color(255,0,0);
  }

if(deformation < 180 && deformation > 100){
  car3.shapeColor = color(230,230,0);
}

if(deformation < 100){
  car3.shapeColor = color(0,225,0);
}
}


  drawSprites();

car.collide(wall);
car1.collide(wall);
car2.collide(wall);
car3.collide(wall);

line1.collide(wall);
line2.collide(wall);
line3.collide(wall);


}