const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(800,530);
    box2 = new box(800,460);
    box3 = new box(800,390);
    box4 = new box (800,320);
    box5 = new box(800,250);
box6 = new box(800,180);
box7 = new box(880,530 )
box8 = new box(880,460)
box9 = new box(880,390);
box10 = new box (880,320);
box11 = new box(880,250);
box12 = new box(880,180);
ball1 = new ball(300,250,80,80)
rope1 = new rope (ball1,0)
    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ground.display();
ball1.display();
rope1.display()
}
function mouseDragged(){
   
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

    }



function mouseReleased(){
    rope1.fly();
}
function keyPressed(){
if(keyCode===32){
    ball1.trajectory=[]
    Matter.Body.setPosition(ball1.body,{x: 200, y: 50})
    rope1.attach(ball1.body)
}
}