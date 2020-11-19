
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Body;

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var rope1
var roof
var roofObject
var bobDiameter
var Options
var rope1



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,500,50)
	bobObject2 = new Bob(300,500,50)
	bobObject3 = new Bob(400,500,50)
	bobObject4 = new Bob(500,500,50)
	bobObject5 = new Bob(600,500,50)

	roof = new Roof(400,100,600,35)


	
	

	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()


  drawSprites();
 
}



