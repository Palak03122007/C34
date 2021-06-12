class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.chain);
    }
    
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        fill("black");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}