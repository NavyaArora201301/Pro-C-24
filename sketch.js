
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;
var ground;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, height-80, 20);

	dustbin1 = new Dustbin(1025,440,17,100);
  dustbin2 = new Dustbin(850,440,17,100);
  dustbin3 = new Dustbin(937,485,190,17);

  ground = new Ground(width/2, 500, 1200, 20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

}

function keyPressed() {
  if (keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body, paper.body.position, {x: 19, y: -19});
  } 
}