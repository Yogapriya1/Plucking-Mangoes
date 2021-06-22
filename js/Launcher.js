class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }

    display(){
        if(this.Launcher.bodyA){
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.Launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.Launcher.bodyA = null
    }

    attach(body){
       this.Launcher.bodyA = body 
    }
}
