class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1_img = loadImage("sprites/sling1.png")
        this.sling2_img = loadImage("sprites/sling2.png")
        this.sling3_img = loadImage("sprites/sling3.png")

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1_img,200,20)
        image(this.sling2_img,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            fill(48,22,8)
            if(pointA.x<220){
                line(pointA.x - 20, pointA.y , pointB.x+30, pointB.y);
                line(pointA.x - 20, pointA.y , pointB.x-10, pointB.y);
                image(this.sling3_img,pointA.x-30,pointA.y - 10,15,30)
            }
            else {
            line(pointA.x + 25, pointA.y , pointB.x+30, pointB.y);
            line(pointA.x + 25, pointA.y , pointB.x-10, pointB.y);
            image(this.sling3_img,pointA.x+25,pointA.y - 10,15,30)
        }
pop();
        }
    }
    
}