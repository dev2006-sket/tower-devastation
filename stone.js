class Block{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
         this.stone = loadImage('stone1.png');
         
         
        this.pointB = pointB
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
    }

    fly(){
        this.stone.bodyA = null;
    }
    
    display(){
        image(this.stone, 200, 20);

        if(this.stone.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
            push();
            pop();
          
           
        }
    }
    
}