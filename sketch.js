const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world, engine;

var snow = [];

var boy, boyImg, invisibleGround;

function preload() {
  bg = loadImage("snow3.jpg");
  boyImg = loadImage("boy.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.28;

  invisibleGround = createSprite(400, 230, 900, 10);
  invisibleGround.visible = false;
}

function draw() {
  background(bg);

  Engine.update(engine);

  if (frameCount%50 == 0) {
    snow.push(new Snow(random(20, width-20), -10, random(41, 50)));
  }

  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }

  if(keyDown("space")){
    boy.velocityY = -10;
  }
  boy.velocityY = boy.velocityY + 0.8;
  boy.collide(invisibleGround);

  if(keyDown("left")){
    boy.x = boy.x-3;
  }
  if(keyDown("right")){
    boy.x = boy.x+3;
  }

  drawSprites();
}