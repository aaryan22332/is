class Bob {
    constructor(x,y,width,height){
     var opton ={
         'restitution':0.8,
         'friction':1.0,
         'density':1.0
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.heighht = height;
     World.add(world, this.body);
}

}