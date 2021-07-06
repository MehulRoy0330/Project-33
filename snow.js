class Snow{
    constructor(x, y, r){
        var options = {
            density: 0.000000001
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}