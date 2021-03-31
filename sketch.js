var player;
var entry;
var exit;
var treasure,treasureImage;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall17,wall18,wall19,
wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall26,wall27,wall28,wall29,wall30,wall31;



function preload(){

  treasureImage=loadImage("trophy_image.png");
}


function setup(){
  createCanvas(450,400);
  entry=createSprite(300,10,50,50);
  entry.shapeColor=rgb(3,252,23);

  exit=createSprite(20,379,40,40);
  exit.shapeColor="yellow";

  treasure=createSprite(180,141,20,20);
  treasure.shapeColor="cyan";
  treasure.addImage(treasureImage);
  treasure.scale=0.2

  treasure.setCollider("rectangle",0,0,50,50);
  treasure.debug=true;

  
  
  
  edges=createEdgeSprites();

  //wallls starting here 
  wall1=createSprite(180,34,181,10);
  //wall1.visible=false;

  wall2=createSprite(50,80,100,10)

  wall3=createSprite(43,34,10,100);

  wall4=createSprite(158,130,10,100);

  wall5=createSprite(89,118,130,10);

  wall6=createSprite(300,128,10,100);
  
  wall7=createSprite(232,128,10,100);

  wall8=createSprite(195,122,65,10)

  wall9=createSprite(50,160,100,10)
  
  wall10=createSprite(100,250,10,100);

  wall11=createSprite(90,540,175,10)

  wall12=createSprite(150,252,100,10);

  wall13=createSprite(250,257,10,100);

  wall14=createSprite(40,295,110,10);

  wall15=createSprite(25,205,50,10);

  wall16=createSprite(45,235,10,50);

  wall17=createSprite(281,118,35,10);

  wall18=createSprite(245,155,30,10);

  wall19=createSprite(69,160,170,10);

  wall20=createSprite(250,332,10,50)

  wall21=createSprite(188,352,115,10)

  wall22=createSprite(135,380,10,50);

  wall23=createSprite(185,319,10,56);

  wall24=createSprite(122,295,50,10);

  wall25=createSprite(76,328,10,56)

  wall26=createSprite(296,265,10,100);

  wall27=createSprite(271,310,40,10);

  wall28=createSprite(200,207,10,100)

  wall29=createSprite(200,54,10,50);
  
//score walls
  wall30=createSprite(340,130,10,1000);
  wall31=createSprite(400,81,110,10)

  player=createSprite(300,15,10,10);
  player.shapeColor="pink"

  player.setCollider("rectangle",0,0,player.width,player.height);
  player.debug=true;

  
}
function draw(){
  background("black");
 drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);

  text("YOUR SCORE",352,20)
  text("GOLD=5:14mins",345,120);
  text("SILVER=5:30mins",345,150);
  text("BRONZE=6:03mins",345,180);

  
touchingWalls(player,wall1);
touchingWalls(player,wall2);
touchingWalls(player,wall3);
touchingWalls(player,wall4);
touchingWalls(player,wall5);
touchingWalls(player,wall6);
touchingWalls(player,wall7);
touchingWalls(player,wall8);
touchingWalls(player,wall9);
touchingWalls(player,wall10);
touchingWalls(player,wall11);
touchingWalls(player,wall12);
touchingWalls(player,wall13);
touchingWalls(player,wall14);
touchingWalls(player,wall15);
touchingWalls(player,wall16);
touchingWalls(player,wall17);
touchingWalls(player,wall18);
touchingWalls(player,wall19);
touchingWalls(player,wall20);
touchingWalls(player,wall21);
touchingWalls(player,wall22);
touchingWalls(player,wall23);
touchingWalls(player,wall24);
touchingWalls(player,wall25);
touchingWalls(player,wall26);
touchingWalls(player,wall27);
touchingWalls(player,wall28);
touchingWalls(player,wall29);


  player.bounce(wall30);

  if(player.isTouching(treasure)){
    treasure.visible=false;
  };

  player.bounce(edges[0])
  player.bounce(edges[1])
  player.bounce(edges[2])
  player.bounce(edges[3])

  if(keyDown("RIGHT_ARROW")){
    //player.velocityX=5;
    player.x=player.x+5
   // player.velocityY=0;
  };
  if(keyDown("LEFT_ARROW")){
    //player.velocityX=-5;
    player.x=player.x-5;    
    //player.velocityY=0;
  };
  if(keyDown("UP_ARROW")){
    //player.velocityY=-5;
    player.y=player.y-5;
  };
   if(keyDown("DOWN_ARROW")){
    //player.velocityY=5;
    player.y=player.y+5;
   };

}

function touchingWalls(player,wall){

  if(player.isTouching(wall)){
    wall.visible=true;
    player.bounce(wall);
  }
  else {
    wall.visible=false;
  };

}







