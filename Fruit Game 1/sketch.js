const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var woddenBoard;
var knife;
var fruits = [];
var bombs = [];
var fruitsGroup,BombGroup;
var score = 0;
var lifes = 3;
function preload(){
    woddenBoard = loadImage ("sprites/WoddenBoard.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    knife = new Knife (200,200,50,50);
    //fruitsGroup = createGroup();
    //BombGroup = createGroup();

}

function draw(){
    background(woddenBoard);
    stroke("black")
    fill("black")
    textSize(25)
    text("SCORE - "+score,1000,40)
    text("LIFES  - "+lifes,50,30)
    knife.x = World.mouseX;
    knife.y = World.mouseY;
    knife.display(); 
    Engine.update(engine);    
    spawnFruits();
    spawnBombs();
    if(isTouching(knife,fruits)){
        score = score + 1;
        fruits.destroy();
    }
    if(isTouching(knife,bombs)){
        lifes = lifes - 1;
        bombs.destroy();
    }
    for (var k = 0; k < bombs.length; k++) {
        bombs[k].display();  
     }
     for (var j = 0; j < fruits.length; j++) {
        fruits[j].display(); 
     } 
}


function spawnFruits(){
    if (frameCount%70 === 0){
        fruits.pop();
        var newFruit = new Fruits(Math.round(random(50,1150)),50);
        fruits.push(newFruit);
        
        //fruitsGroup.add(fruits[i]); 
    }
}


function spawnBombs(){
   
    if (frameCount % 70 === 0){
        bombs.pop()
        bombs.push(new Bomb(Math.round(random(50,1150)),50));
        //BombGroup.add(bombs[i])

    }
}
function isTouching(movingRect,fixedRect){
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) 
    {return true} 
else 
    {return false}
}