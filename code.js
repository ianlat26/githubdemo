var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["304cc555-a70b-483e-a973-b72cc95c450f","7e8942a4-3405-4d8b-b09d-907e24b4adef","ebbc8d93-381c-4ed5-bddb-78ab4ea1d757"],"propsByKey":{"304cc555-a70b-483e-a973-b72cc95c450f":{"name":"Level1","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"zS5Y8gqSiTz4l8y.S9xwvgqkjJVgUJIJ","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/304cc555-a70b-483e-a973-b72cc95c450f.png"},"7e8942a4-3405-4d8b-b09d-907e24b4adef":{"name":"Level2","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"xmR_qt7zaKPe5X7hvBpbljd3IWTPVJPK","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/7e8942a4-3405-4d8b-b09d-907e24b4adef.png"},"ebbc8d93-381c-4ed5-bddb-78ab4ea1d757":{"name":"Level3","sourceUrl":null,"frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"rAeOR.x1H_y7jfFlrs7X.TAI.gSxXF4X","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/ebbc8d93-381c-4ed5-bddb-78ab4ea1d757.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


World.frameRate = 45;
//var level0 = 0;
var scene = 1;
var level1 = createSprite(60, 50);
level1.setAnimation("Level1");
level1.visible = false;
var level2 = createSprite(200, 50);
level2.setAnimation("Level2");
level2.visible = false;
var level3  = createSprite(200, 200);
level3.setAnimation("Level3");
level3.visible = false;
var playerCube = createSprite(40, 320, 25, 25);
var walls = createGroup();
var endCube = createGroup();
var speed = 5;
var gravityPull = 0.5;
var touchingWalls = false;
var touchingEnd_Cube = false;
var Jump = 8;
var overOver = false;



if (scene ==1) {
  playerCube.shapeColor = "red";
    endCube.add(createSprite(50,130,50,50));
    //{
      walls.add(createSprite(40,360,50,50));
      walls.add(createSprite(200,330, 50,50));
      walls.add(createSprite(280,260,50,50));
      walls.add(createSprite(165,200,60,20));
      walls.add(createSprite(155,150,60,20));
      walls.add(createSprite(50,130,49,49));
}
// } else if ((scene ==2)) {
//   playerCube.shapeColor = "red";
//   endCube.add(createSprite(50,130,50,50));
//     //{
//       walls.add(createSprite(40,360,50,50));
//       walls.add(createSprite(200,360, 50,50));
//       walls.add(createSprite(280,260,50,50));
//       walls.add(createSprite(165,200,60,20));
//       walls.add(createSprite(155,150,60,20));
//       walls.add(createSprite(50,130,49,49));
// } else if ((scene==3)) {
//   playerCube.shapeColor = "red";
//   endCube.add(createSprite(50,130,50,50));
//     //{
//       walls.add(createSprite(40,360,50,50));
//       walls.add(createSprite(200,330, 50,50));
//       walls.add(createSprite(280,260,50,50));
//       walls.add(createSprite(165,200,60,20));
//       walls.add(createSprite(155,150,60,20));
//       walls.add(createSprite(50,130,49,49));
// }
  
 // }

  
//var playerCollision;
function draw (){
  if (!overOver){
  background("lightgray");
  drawSprites();
  playerMovement();
  playerGravity();
  playerCollision();
  checkPlayerWalls();
  checkPlayerEnd();
  if (mousePressedOver(level1)) {
      playerCube.x = 40;
      playerCube.y = 320;
            endCube.add(createSprite(50,130,50,50));
        //{
          walls[1].x = 160;
          walls[1].y =160;
          walls[2].x = 280;
          walls[2].y = 220;
          walls[3].x = 200;
          walls[3].y = 300;
          walls[4].x = 270;
          walls[4].y = 270;
          
          
          // walls.add(createSprite(200,360, 50,50));
          // walls.add(createSprite(280,260,50,50));
          // walls.add(createSprite(165,200,60,20));
          // walls.add(createSprite(155,150,60,20));
          // walls.add(createSprite(50,130,49,49));
      level1.visible = false;
      scene = 2;
          
          
      
      // endCube.add(createSprite(50,130,50,50));
      //   //{
      //     walls.add(createSprite(40,360,50,50));
      //     walls.add(createSprite(200,330, 50,50));
      //     walls.add(createSprite(280,260,50,50));
      //     walls.add(createSprite(165,200,60,20));
      //     walls.add(createSprite(155,150,60,20));
      //     walls.add(createSprite(50,130,49,49));
    }
  if (mousePressedOver(level2)) {
      playerCube.x = 40;
      playerCube.y = 320;
      level2.visible = false;
      scene = 3;
      walls[1].x = 100;
          (walls[1]).y =290;
          walls[2].x = 150;
          walls[2].y = 130;
          walls[3].x = 200;
          walls[3].y = 230;
          walls[4].x = 260;
          walls[4].y = 160;
      //walls.clear();
      
      // endCube.add(createSprite(50,130,50,50));
      // for(var i =1; i< walls.length-1;i++){
      //   walls[i].x = randomNumber(50, 250);
      
    }
          // walls.add(createSprite(40,360,50,50));
          // walls.add(createSprite(200,360, 50,50));
          // walls.add(createSprite(280,260,50,50));
          // walls.add(createSprite(165,200,60,20));
          // walls.add(createSprite(155,150,60,20));
          // walls.add(createSprite(50,130,49,49));
    
  }
}
  
    

  

  


function playerMovement(){
  if(keyDown("RIGHT_ARROW") || keyDown("d")){
  playerCube.x += speed;
  }
 if(keyDown("LEFT_ARROW") || keyDown("a")){
  playerCube.x -= speed;
}
if(keyDown("UP_ARROW") || keyDown("space") || keyDown("w")){
  if (touchingWalls)
  playerCube.velocityY = -Jump;
}
}

function playerGravity(){
  playerCube.velocityY += gravityPull;
}

function playerCollision(){
  playerCube.collide(walls);
  if (playerCube.y > 400){
    playerCube.x = 40;
    playerCube.y = 305;
  }
}

  function checkPlayerWalls(){
  playerCube.y += 0.5;
  touchingWalls = playerCube.isTouching(walls);
  playerCube.y-= 0.5;
}


  
   
//}



function checkPlayerEnd(){
  if (playerCube.isTouching(endCube) && (scene == 1)&& playerCube.y < 105){
    touchingEnd_Cube = true;
    level1.visible = true;
    level2.visible = false;
     }
   if (playerCube.isTouching(endCube) && (scene == 2)&& playerCube.y < 105){
    touchingEnd_Cube = true;
    level2.visible = true;
    level1.visivle = false;
   }
   if (playerCube.isTouching(endCube) && (scene == 3)&& playerCube.y < 105){
     gameOver();
  }
}

function gameOver(){
  overOver = true;
    playerCube.x = 50;
playerCube.y = 130;
playerCube.velocityY = 0;
    touchingEnd_Cube = true;
    level2.visible = false;
    level1.visivle = false;
    background("black");
fill("white");
textSize(30);
text("Game Over, Good Job!",46,200);

}
    
// background("black");
// fill("white");
// textSize(30);
// text("Game Over, Good Job!",46,200);
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
