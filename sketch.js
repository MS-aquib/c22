//namespacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine,world;

var ground,ball

function setup() {
  createCanvas(400,400)

  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic : true
  }

  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);


  var ball_options = {
    restitution : 1
  }
  ball=Bodies.circle(100,100,30,ball_options);
  World.add(world,ball);

  var render = Render.create({
    element : document.body,
    engine : engine,
    options : {
      width : 400,
      height : 400,
      wireframes : false
    }
  });

  Render.run(render)

 console.log(ground);
 console.log(ground.position.x)
}

function draw() {
  background(0);  

   Engine.update(engine);

   rectMode(CENTER);
   fill("white")
   rect(ground.position.x,ground.position.y,400,20);

   ellipseMode(RADIUS)
   ellipse(ball.position.x, ball.position.y,30,30)
  
}