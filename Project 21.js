var bullet, wall, thickness;
var speed, weight, rating
var gameState = "start"
//var gameState = "running"
//var gameState = "end"

function setup() {
  createCanvas(1604, 400);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(50, 200, 20, 10);
  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(23,88);
  bullet.velocityX = speed;
}

function draw() {
  background("black");

  if (gameState === "start") {
    textSize(20);
    fill("white");

    text("Press SPACE BAR.", 600, 50);

    if (keyDown("space")) {
      gameState = "running";
    }
  }

  if (gameState === "running") {
    weight = Math.round(random(400, 1500));
    speed = Math.round(random(55, 90));
    bullet.velocityX = speed;

    if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
      bullet.velocityX = 0;
      damage = Math.round(0.5 * weight * speed * speed * thickness * thickness * thickness);

      if (damage >= 10) {
        bullet.shapeColor = "red";
        // rating="LETHAL";
      }


      if (damage < 10) {
        bullet.shapeColor = "green";
        //rating="GOOD";
      }

      gameState = "end";
    }
  }

  if (gameState === "end") {
    text("Press 'R' to reset", 1050, 50);
    if (keyDown("r")) {
      reset();
    }
  }
  drawSprites();
}


function reset() {
  gameState = "start";
  bullet.x = 50;
  bullet.shapeColor = color("grey");

}