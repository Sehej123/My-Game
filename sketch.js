const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

var birds = [];

var border;

var treeImage = "Images/tree.jpg";

var tree1;

var border2;

var tree2;
var tree3;
var tree4;
var tree5;
var tree6;
var tree7;
var tree8;
var tree9;

var axe1;


function preload() {
    getBackgroundImg();
}

function setup(){
   var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    axe1 = new Axe(200,300);

    forest = new Forest(400,350,600,500);

    border = new Ground(400,100,600,10);
    border1 = new Ground(800,100,600,10);

   
    
   // platform = new Ground(150, 305, 300, 170);

     tree1 = new Tree(300,300,20,20);
     tree2 = new Tree(450,400,20,20);
     tree3 = new Tree(258,200,20,20);
     tree4 = new Tree(358,500,20,20);
     tree5 = new Tree(430,300,20,20);
     tree6 = new Tree(500,200,20,20);
     tree7 = new Tree(600,250,20,20);
     tree8 = new Tree(500,550,20,20);
     tree9 = new Tree(140,540,20,20);

     

    tree1.loadImage

    // box2 = new Box(920,320,70,70);
    // pig1 = new Pig(810, 350);
    // log1 = new Log(810,260,300, PI/2);

    // box3 = new Box(700,240,70,70);
    // box4 = new Box(920,240,70,70);
    // pig3 = new Pig(810, 220);

    // log3 =  new Log(810,180,300, PI/2);

    // box5 = new Box(810,160,70,70);caaa
    // log4 = new Log(760,120,150, PI/7);
    // log5 = new Log(870,120,150, -PI/7);

    // bird = new Bird(200,50);
    // bird2 = new Bird(150, 170);
    // bird3 = new Bird(100, 170);
    // bird4 = new Bird(50, 170);
    

    // birds.push(bird);
    // birds.push(bird2);
    // birds.push(bird3);
    // birds.push(bird4);
    

    // //log6 = new Log(230,180,80, PI/2);
    // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
     
         background(0);
    
    //     noStroke();
    //     textSize(35)
    //     fill("white")
    //     text("Score  " + score, width-300, 50)
    
     Engine.update(engine);
    // //strokeWeight(4);
   

    // box2.display();
    // ground.display();
    // pig1.display();
    // pig1.score();
    // log1.display();

    // box3.display();
    // box4.display();
    // pig3.display();
    // pig3.score();
  
      // log3.display();

    // box5.display();
    // log4.display();
    // log5.display();

    // bird.display();
   forest.display();
     border.display();
       tree1.display();
       tree2.display();
       tree3.display();
       tree4.display();
       tree5.display();
       tree6.display();
       tree7.display();
       tree8.display();
       tree9.display();

       axe1.display();

    // tree1.display();
    // //log6.display();
    // slingshot.display();    
}

function mouseDragged(){
//    if (gameState!=="launched"){
//         Matter.Body.setPosition(birds[birds.length-1].body, {x: mouseX , y: mouseY});
//         Matter.Bod.applyForce()
//    }
}


function mouseReleased(){
    // slingshot.fly();
    // gameState = "launched";
}

function keyPressed(){
    // if(keyCode === 32 && gameState==="launched"){
    //     Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
    //     slingshot.attach(bird.body);
    //     gameState = "onSling";
    // }
}

async function getBackgroundImg(){
    // var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    // var responseJSON = await response.json();

    // var datetime = responseJSON.datetime;
    // var hour = datetime.slice(11,13);
    
    // if(hour>=06 && hour<=19){
    //     bg = "sprites/bg1.png";
    // }
    // else{
    //     bg = "sprites/bg2.jpg";
    // }

    // backgroundImg = loadImage(bg);
    // console.log(backgroundImg);
}
