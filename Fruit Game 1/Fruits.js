class Fruits{
  constructor(x,y) {
      var options = {
          
          'friction':1.0,
          'density':0.04
      }
      var num = Math.round(random(1,2));
      if (num === 1){
      this.image = loadImage("sprites/Apple.png")
      }
      if(num === 2){
        this.image = loadImage("sprites/Bannana.png")
      }
      this.body = Bodies.rectangle(x, y ,50,50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
     
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);
      image(this.image, 0, 0, this.width,this.height);
      pop();
    }
}