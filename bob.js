class Bob {
    constructor(x,y,radius) {
      var options = {
     'restitution':1.3, 
     'friction':2, 
     'density':0.2,
      }
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle =this.body.angle; 
      push(); 
      fill("purple");
      translate(pos.x, pos.y); 
      rotate(angle); 
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius); 
      pop();
    }
  }