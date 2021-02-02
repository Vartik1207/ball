class rope{
constructor(bodyA,pointB){
    var option={
        bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
          
            length: 10
        }
        this.pointB = pointB
        
        World.add(world, this.body);
    }
    attach(bodyA){
        this.body.bodyA=body
        }
    fly(){
        this.body.bodyA = null;
    }
   display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB= this.pointB;
            push()
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x, pointA.y, pointB.x+20, pointB.y+10);
             pop()

        }
    }
}
