class Particle {
    constructor(x,y){
    var options = {
        'restitution': 1,
        'friction' : 1,
        'density': 1.2
    }
    this.body=Bodies.circle(x,y,10,options)
    World.add(world,this.body)
   this.color=color(random(0,255),random(0,255),random(0,255))
    }
   
    display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill (this.color)
       stroke (255)
       ellipse(0, 0, 10);
       pop();
     }
   
   
   
   }