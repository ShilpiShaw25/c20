var f,m;

function setup() {
  createCanvas(800,400);
  m=createSprite(300,150,80,40);
  f=createSprite(200,200,50,30);
  m.shapeColor="green";
  f.shapeColor="green";

}

function draw() {
background("yellow");
m.x=mouseX;
m.y=mouseY;

console.log(m.y-f.y)

if(m.x-f.x <m.width/2+f.width/2 &&
   f.x-m.x<m.width/2+f.width/2 && 
   m.y-f.y<m.height/2+f.height/2 && 
   f.y-m.y<m.height/2+f.height/2  ){
     
  m.shapeColor="red";
  f.shapeColor="red";
}

else{
  m.shapeColor="green";
  f.shapeColor="green";

}
drawSprites();

}