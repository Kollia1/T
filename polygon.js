class Polygon  {
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.smokeimage = loadImage("sprites/enemy.png")
      //this.birdimage = loadImage("sprites/bird.png");

      
    }
  
    display() {
      //this.body.position.x = mouseX;
     // this.body.position.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.birdimage, 0, 0, this.width, this.height);
      pop();
     // image(this.birdimage,0,0,this.width,this.height)
      //if(this.body.velocity.x>10 && this.body.position.x>250){
      //var position= [this.body.position.x,this.body.position.y];
      
      //}
      for(var i = 0; i<this.trajectory.length;i++){
        image(this.smokeimage,this.trajectory[i][0], this.trajectory[i][1]);
        
      }
    
    }
  }
  