var car,wall;
var carDeformation;

function setup() {
  createCanvas(1600,400);

  speed = random(30,95);
  weight = random(400,1500);
  
  car = new Car(weight,speed);
    
  wall = createSprite(1350,200,60,400);
 wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0,0,0);  

 if(car.sprite.collide(wall)){
  deformation();
 }

 drawSprites();
}

function deformation(){
   carDeformation =0.5*car.weight*car.speed*car.speed/22500;
 
  if(carDeformation>180){
    car.sprite.shapeColor = color(255,0,0);
  }
  if(carDeformation>100 && carDeformation<180){
    car.sprite.shapeColor = color(230,230,0);
  }
  if(carDeformation<100){
    car.sprite.shapeColor = color(0,255,0);
  }
}


