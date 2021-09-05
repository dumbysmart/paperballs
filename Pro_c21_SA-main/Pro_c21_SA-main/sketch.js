const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var rightB
var leftB

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  
  ball=Bodies.circle(200,200,20,{
    restitution:0.5
  })
  World.add(world,ball)
  
  ground =new Ground(300,390,600,20);
  rightB = new Ground(500,330,10,100);
  leftB = new Ground(400,330,10,100);
  right = new Ground(10,200,20,400)
  left = new Ground(590,200,20,400)
  
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  if (keyIsDown(UP_ARROW)){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
  }
  if (keyIsDown(DOWN_ARROW)){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.005})
  }
  if (keyIsDown(RIGHT_ARROW)){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0})
  }
  if (keyIsDown(LEFT_ARROW)){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.005,y:0})
  }
  ground.show();
  
  left.show();
  right.show();
  rightB.show()
  leftB.show()
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}

