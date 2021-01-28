class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.body = Bodies.rectangle(x, y, 20, 20, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
    }

    display() {
    image(this.image,200,20);
    } 
}