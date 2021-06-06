class Block {
    constructor (x, y, width, height){
        var options = {
            isStatic: false,
            'restitution': 0.4,
            'friction':1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=225;
        World.add(world, this.body);
    }
    display () {
         
        if(this.body.speed>7){

            World.remove(world,this.body);
         push();
         this.Visibility= this.Visibility-5;
         tint(225, this.Visibility);
         rect(999,999,this.width,this.height)
         pop();
        }
        else{
            var angle=this.body.angle;
            var pos = this.body.position;
        push();
        translate(pos.x,pos.y) 
        rotate(angle)  ; 
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
        }
       

        
    }
}