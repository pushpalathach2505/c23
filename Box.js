class Box
{
    constructor(x,y,width,height)
    {
        var box_options={
            'restitution':1.5,
           
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width,this.height);
    pop();
}
}