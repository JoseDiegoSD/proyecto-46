var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9;
var ghost, ghost1, ghost2, ghost3, ghost4, ghost5;
var angel, demonio1, demonio2, demonio3, demonio4, demonio5;
var portal, portalImg;
var meta;
var count;
var gameState;
var musica;
var edges;

function preload(){
angel=loadAnimation("angel1.png","angel2.png","angel3.png","angel4.png");
demonio1=loadImage("demonio1.gif");
demonio2=loadImage("demonio2.gif");
demonio3=loadImage("demonio3.gif");
demonio4=loadImage("demonio4.gif");
demonio5=loadImage("demonio5.gif");
portalImg=loadImage("portal.gif");
musica=loadSound("fantasy.mp3");
}


function setup(){
    createCanvas(600,620);
    //bordes
    wall1 = createSprite(300,20,570,3);
    wall1.shapeColor = "black";

    wall2 = createSprite(300,600,570,3);
    wall2.shapeColor = "black";

    wall3 = createSprite(20,310,3,590);
    wall3.shapeColor = "black";

    wall4 = createSprite(580,310,3,590);
    wall4.shapeColor = "black";

    //barreras
    wall5 = createSprite(220,120,400,3);
    wall5.shapeColor = "black";

    wall6 = createSprite(380,220,400,3);
    wall6.shapeColor = "black";

    wall7 = createSprite(220,320,400,3);
    wall7.shapeColor = "black";

    wall8 = createSprite(380,420,400,3);
    wall8.shapeColor = "black";

    wall9 = createSprite(220,520,400,3);
    wall9.shapeColor = "black";
    

      
    meta = createSprite(60, 560, 10, 10);
    meta.addAnimation("cielo",portalImg);

    meta.scale =1.6;

    edges=createEdgeSprites();
      
      
    ghost = createSprite(50,60,13,13);
    ghost.addAnimation("ghost",angel);
    ghost.scale = 0.7;
    
    ghost1 = createSprite(140,200,10,10);
    ghost1.addAnimation("ghost1",demonio1);
    ghost1.scale = 0.7;
      
    ghost2 = createSprite(280,200,10,10);
    ghost2.addAnimation("ghost2",demonio2);
    ghost2.scale = 0.7;
      
    ghost3 = createSprite(400,200,10,10);
    ghost3.addAnimation("ghost3",demonio3);
    ghost3.scale = 0.7;
      
    ghost4 = createSprite(500,200,10,10);
    ghost4.addAnimation("ghost4",demonio4);
    ghost4.scale = 0.7;
      
    ghost5 = createSprite(200, 200, 10, 10);
    ghost5.addAnimation("ghost5",demonio5);
    ghost5.scale = 2.2;
    ghost1.velocityY = 12;
    ghost2.velocityY = 11;
    ghost3.velocityY = -11;
    ghost4.velocityY = -11;
    ghost5.velocityX = 5;
    ghost5.velocityY = 8;
      
    count = 0;
    gameState = "serve";
      
    //musica.play()

}


function draw(){
    background("red");
    textSize(30);
    fill("black");
    text("Muertes: " + count,260,50);
  
  ghost1.bounceOff(edges);
  ghost2.bounceOff(edges);
  ghost3.bounceOff(edges);
  ghost4.bounceOff(edges);
  ghost5.bounceOff(edges);
  ghost.bounceOff(wall1);
  ghost.bounceOff(wall2);
  ghost.bounceOff(wall3);
  ghost.bounceOff(wall4);
  ghost.bounceOff(wall5);
  ghost.bounceOff(wall6);
  ghost.bounceOff(wall7);
  ghost.bounceOff(wall8);
  ghost.bounceOff(wall9);

 if (keyDown("space") && gameState === "serve") {
    gameState = "play";
  }
  if (keyDown("r")) {
    reset();
  }
  
  if(keyDown("right")){
    ghost.x = ghost.x + 5;
  }
  if (keyDown("up")) {
    ghost.y = ghost.y - 4;
  }
  if(keyDown("left")){
    ghost.x = ghost.x - 5;
  }
  if (keyDown("down")) {
    ghost.y = ghost.y + 4;
  }
  if (ghost.isTouching(meta)) {
    ghost1.velocityY = 0;
ghost2.velocityY = 0;
ghost3.velocityY = 0;
ghost4.velocityY = 0;
ghost5.velocityX = 0;
ghost5.velocityY = 0;
    text("GANASTE", 150, 250);
    text("EL ANGEL ESCAPO ", 70, 160);
    text("Pulsa R para volver a jugar!", 120, 350);
    gameState = "over";
  }
  if((((ghost.isTouching(ghost1)||
     ghost.isTouching(ghost2))||
     ghost.isTouching(ghost3))||
     ghost.isTouching(ghost4))||
     ghost.isTouching(ghost5))
  {
     ghost.x = 40;
     ghost.y = 40;
     count = count + 1;
  }
  
drawSprites();

}

function reset() {
    count = 0;
    ghost1.velocityY = 12;
  ghost2.velocityY = 11;
    ghost3.velocityY = -11;
  ghost4.velocityY = -11;
  ghost5.velocityX = 5;
  ghost5.velocityY = 7;
    ghost.x = 40;
    ghost.y = 40 ;
    ghost1.x = 140;
    ghost1.y = 200;
    ghost2.x = 280;
    ghost2.y = 200;
    ghost3.x = 400;
    ghost3.y = 200;
    ghost4.x = 500;
    ghost4.y = 200;
    ghost5.x = 200;
    ghost5.y = 200;
  }
