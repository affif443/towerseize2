const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,ground1;

var block17,block18,block19,block20,block21,block22,block23;
var block24,block25,ground2;

var sling;
var release=0;
var engine;
var ball;

function setup() {
  createCanvas(800,600);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;



  //CREATING BODIES

  ground1 = new Ground(640,250,220,20);
  ground2 = new Ground(330,500,250,20);

  block1=new Block(240,475,30,30);
  block2=new Block(270,475,30,30);
  block3=new Block(300,475,30,30);
  block4=new Block(330,475,30,30);
  block5=new Block(360,475,30,30);
  block6=new Block(390,475,30,30);
  block7=new Block(420,475,30,30);

  block8=new Block(270,395,30,30);
  block9=new Block(300,395,30,30);
  block10=new Block(330,395,30,30);
  block11=new Block(360,395,30,30);
  block12=new Block(390,395,30,30);

  block13=new Block(300,365,30,30);
  block14=new Block(330,365,30,30);
  block15=new Block(360,365,30,30);

  block16=new Block(330,335,30,30);


  block17=new Block(580,225,30,30);
  block18=new Block(610,225,30,30);
  block19=new Block(640,225,30,30);
  block20=new Block(670,225,30,30);
  block21=new Block(700,225,30,30);


  block22=new Block(610,195,30,30);
  block23=new Block(640,195,30,30);
  block24=new Block(670,195,30,30);
 
  block25=new Block(640,165,30,40);
  

  ball=new Ball(100,100,20,20);

  

  sling=new Sling(ball.body,{x:200,y:200});

  Engine.run(engine);

}

function draw() { 
  
  rectMode(CENTER);
  
  background("white");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  ball.display();
  sling.display();
  ground1.display();
  ground2.display();
}

function mouseDragged() {
  if(release===0){
       Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased() {

   release=0;
   sling.fly();

}

function keyPressed(){
  if(keyCode===32){
    sling.attach(ball.body);
  }
}

