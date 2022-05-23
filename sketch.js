var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0
createEdgeSprites()
balloonsgroup = new Group()
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
 
  

   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }

  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
 
  if (World.frameCount % 100 == 0) {
    switch(select_balloon){
      case 1: redBalloon()
      score +=1
      break;
      case 2: greenBalloon()
      score +=1
      break;
      case 3: pinkBalloon()
      score +=1
      break;
      case 4: blueBalloon()
      score +=1
      break;

    }
    }
drawSprites();



text("score:" +score,320,20)
  }  


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.setCollider("circle",0,0,40,)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 40, 50);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red.setCollider("circle",0,0,40,)
}
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 40, 50);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  green.setCollider("circle",0,0,40,)
}
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 40, 50);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale =1;
  pink.setCollider("circle",0,0,40,)
}
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 40, 50);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blue.setCollider("circle",0,0,40,)
}
function end() {
  blue.velocityX = 0
  pink.velocityX = 0
  green.velocityX = 0
  red.velocityX = 0
  red.setCollider("circle",0,0,40,)
}


