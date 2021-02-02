class ball{
constructor(x,y,width,height,angle){
var option={
'density':1,
'friction':0.1
}
this.body=Bodies.rectangle(x,y,width,height,option)
this.width=width
this.height=height
World.add(world,this.body)
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
ellipseMode(RADIUS)
ellipse(0,0,this.width,this.height)
pop()
}
}