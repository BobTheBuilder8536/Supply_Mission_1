var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var options = {
	'restitution':1, 
	'isStatic':true
};

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite = createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255);

	packageSprite=createSprite(200, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.rectangle(helicopterSprite.x , 200 , 15 ,15, options);
	World.add(world, packageBody);
	

	//Create a Ground
 
	ground = Bodies.rectangle(width/2, 645, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {

	packageBody.position.x = helicopterSprite.x;

  rectMode(CENTER);
  background(0);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y; 
 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyWentDown("s")) {

	packageBody.position.x = packageBody.position.x;

	Body.setStatic(packageBody,false);
  }
}



