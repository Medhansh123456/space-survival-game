var bg,bge;
var space;
var player;
var game;
var blocker1,blocker2

function preload(){

bge=loadImage("download.png");
space=loadImage("sp.jpg");
rocket=loadImage("player.png")
over=loadImage("game.jpg")
b=loadImage("black.jpg")
r=loadImage("re.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg = createSprite(400,650,400,20);
  bg.addImage(space);
  bg.scale=0.9
  bg.x = width /2;

  
player=createSprite(200,400);
player.addImage(rocket);
player.scale=0.3;

black=createSprite(200,20000)
black.addImage(b);
black.scale=8;

game=createSprite(67000,300);
game.addImage(over);
game.scale=2

ufoGroup=new Group();

blocker1=createSprite(1000,35,10000,50);
blocker2=createSprite(900,700,10000,50);

blocker1.visible = false;
blocker2.visible = false;

player.setCollider("rectangle",0,0,900,530);
player.debug = false

re=createSprite(20000,300);
re.addImage(r);
re.scale=0.08

}

function draw(){
background(0);
//player.y=World.mouseY;

player.collide(blocker1);
player.collide(blocker2);

console.log(player.y)

bg.velocityX=-20

    if(bg.x<400)
    {
       bg.x=1000
    }

    if(ufoGroup.isTouching(player)){
    bg.x=20000;
    game.x=670;
    player.x=10000
    black.y=200
    re.x=1300
  
    }
  
    if(mousePressedOver(re)){
    bg.x=400
    black.y=200000
    player.x=200
    re.y=20000
    game.x=670000;
    }

 if (keyDown("up")) {
  player.y = player.y-10;
  }
  

  if (keyDown("down")) {
     player.y=player.y+10;  
     }
    
  fill("white");
  textSize(20);
  text("CONTROL TOWER  ASTEROIDS WILL HIT US SOON",20,40);

  fill("white");
  textSize(20);
  text("---CONTROL TOWER HERE MOVE SPACECRAFT UP-DOWN TO SURVIVE",600,40);

ufoGroup.lifetime=100
    
ASTEROIDS()

drawSprites();
}

function ASTEROIDS(){
  if(frameCount%200===0){
    var ufo=createSprite(2000,100);
    ufo.y=Math.round(random(300,700));
    ufo.scale=0.07;
    ufo.addImage(bge);
    ufo.velocityX=-30;
    ufoGroup.add(ufo);
    ufo.depth=black.depth-1;
  }
}