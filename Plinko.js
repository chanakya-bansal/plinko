class Plinko {
    constructor(x,y){
    var options = {
        'restitution': 1,
        'friction' : 1,
        'density': 1.2,
        'isStatic': true

    }
    this.body=Bodies.circle(x,y,10,options)
    World.add(world,this.body)
   
    }
   
    display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill (0)
       stroke (0)
       ellipse(0, 0, 10);
       pop();
     }
   
   
   
   }