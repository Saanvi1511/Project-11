var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin, bomb , energyDrink; 
var coinImg , bombImg , energyDrinkImg;

function preload()
{
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  bombImg = loadImage("bomb.png");
  energyDrinkImg = loadImage("energyDrink.png");

}


function setup()
{
  
  createCanvas(400,400);
  
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
    

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  // leftBoundary.invisible = false;
  // leftBoundary.visible = true;
  // leftBoundary.invisible = true;


  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;

  drawCoin();
  drawEnergy();
  drawBomb();
}


function draw() {
  background(0);

  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  boy.depth = boy.depth + 1;

  var select_pops = Math.round(random(100,300));

  if (World.frameCount % 200 === 0) {
    if (select_pops === 1) {
      drawCoin();
    } else if (select_pops === 2) {
      drawBomb();
    } else if (select_pops === 3) {
      drawEnergy();
    } 
  }
  
  //code to reset the background

  if(path.y > 400 )
  {
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
  path.y = height/2;}*/

  /*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();

}

  

function drawCoin() {
  var coin = createSprite(Math.round(random(100 , 300)),0  , 10, 10);
  coin.addImage(coinImg);
  coin.velocityY = 3;
  coin.lifetime = 150;
  coin.scale = 0.5;
}

function drawBomb() {
  var bomb = createSprite(Math.round(random(100 , 300)),0  , 10, 10);
  bomb.addImage(bombImg);
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  bomb.scale = 0.1;
}

function drawEnergy() {
  var energyDrink = createSprite(Math.round(random(100 , 300)),0  , 10, 10);
  energyDrink.addImage(energyDrinkImg);
  energyDrink.velocityY = 3;
  energyDrink.lifetime = 150;
  energyDrink.scale = 0.1;
}