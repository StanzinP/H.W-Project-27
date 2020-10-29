const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1;
var b2;
var b3;
var b4;
var b5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(240,500, 40,40);
	b2 = new Bob(320,500, 40);
	b3 = new Bob(400,500, 40);
	b4 = new Bob(480,500, 40);
	b5 = new Bob(560,500, 40);

	ground = new Ground(400,200,400,50); 

	rope1 = new Rope(b1.body, ground.body, -110, 0);
	rope2 = new Rope(b2.body, ground.body, -80, 0); 
	rope3 = new Rope(b3.body, ground.body, 0, 0);
	rope4 = new Rope(b4.body, ground.body, 80, 0);
	rope5 = new Rope(b5.body, ground.body, 160, 0);
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(b1.body, b1.body.position,{x:-55,y:-55});
	Matter.Body.applyForce(b2.body, b2.body.position,{x:-35,y:-35});
  }
}


