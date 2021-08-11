var iss, spacecraft;
var issImage,spacecraftImage,spacecraftImage2,spacecraftImage3,spacecraftImage4,spacebgImage,spaceSound;
var hasDocked = false;

function preload(){
issImage = loadImage("Docking-undocking/iss.png");
spacecraftImage = loadImage("Docking-undocking/spacecraft1.png");
spacecraftImage2 = loadImage("Docking-undocking/spacecraft2.png");
spacecraftImage3 = loadImage("Docking-undocking/spacecraft3.png");
spacecraftImage4 = loadImage("Docking-undocking/spacecraft4.png");
spacebgImage = loadImage("Docking-undocking/spacebg.jpg");
spaceSound = loadSound("Music.mp3");
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(330, 160);
  iss.addImage(issImage);
  iss.scale = 0.6;
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraftImage);
  spacecraft.scale = 0.15;
}

function draw() {
  background(spacebgImage);  


  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
      
  if(keyDown("UP_ARROW")){
    spacecraft.y  = spacecraft.y -2;
    spaceSound.play();
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftImage2);
    
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraftImage3);
    spacecraft.x  = spacecraft.x -2;
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraftImage4);
    spacecraft.x  = spacecraft.x +2;
  }
  
}
if(spacecraft.y <= 218&&spacecraft.x <=315){
  hasDocked = true;
  fill("orange");
  textSize(20);
  text("Docking Successful",100,50);
}
  drawSprites();
}