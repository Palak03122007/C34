const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;

var engine,world;
var base;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var stone;
var sling;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(600,400,1200,20);
  box1 = new Block(800,360,50,50);
  box2 = new Block(850,360,50,50);
  box3 = new Block(800,310,50,50);
  box4 = new Block(850,310,50,50);
  box5 = new Block(800,160,50,50);
  box6 = new Block(850,160,50,50);
  box7 = new Block(800,210,50,50);
  box8 = new Block(850,210,50,50);
  box9 = new Block(800,160,50,50);
  box10 = new Block(850,160,50,50);
  stone = new Ball(600,160,50,50);
  
  sling = new Slingshot(stone.body,{x:600,y:160});
}

function draw() {
  background(255,255,255);  
  drawSprites();

  Engine.update(engine);

  base.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  stone.display();
  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}