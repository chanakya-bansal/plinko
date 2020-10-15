const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinko=[]
var divisions=[]

var divisionHeight=300

function setup() {
  createCanvas(480,750);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,730,width,20)
 
  for (var k = 5; k <= width; k = k + 78.4) {
    divisions.push(new Division(k, height - (divisionHeight / 2+10), 10, divisionHeight));

  
}
for (var j = 10; j <= width; j = j + 50) {

  plinko.push(new Plinko(j, 75));
}

for (var j = 35; j <= width - 10; j = j + 50) {

  plinko.push(new Plinko(j, 150));
}
for (var j = 10; j <= width; j = j + 50) {

  plinko.push(new Plinko(j, 225));
}
for (var j = 35; j <= width - 10; j = j + 50) {

  plinko.push(new Plinko(j, 300));
}


}

function draw() {
  background(255);  
  Engine.update(engine);

  ground.display()

 
 
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    
}

if (frameCount % 30 === 0) {
  particles.push(new Particle(random(width / 2 - 40, width / 2 + 40), 10, 10));
}
for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}


 for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
}
 
 drawSprites()
}