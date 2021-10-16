class computerArcher{
    constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.compArcherImage = loadImage("assets/computerArcher.png")
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (keyIsDown(DOWN_ARROW) && angle < 1.9) {
    angle += 0.01;
    Matter.Body.setAngle(this.body, angle);
    }
    if (keyIsDown(UP_ARROW) && angle > -1.9) {
    angle -= 0.01; Matter.Body.setAngle(this.body, angle);
    } 
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop(); 
    } 
  }