class Knife{
  constructor(x, y, width, height) {
      var options = {
          
          
          'density':1.0,
          'frictionAir':0.005
      }

      this.image = loadImage("sprites/Knife.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos  = this.body.position
      pos.x=mouseX;
      pos.y=mouseY;
        
      imageMode(CENTER)
      
      push();
      translate(pos.x,pos.y);
      
      image( this.image,0, 0, this.width, this.height);
      pop();
    }
}