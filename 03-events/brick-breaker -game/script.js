
const ball = document.querySelector("#ball");
const box = document.querySelector("#box");

const container = document.querySelector(".container")


// Making "MovingBar" movable

const movingBar = document.querySelector("#movingBar");
  movingBar.style.left = 50 + "%";
  movingBar.style.top = 90 + "%";
  window.addEventListener("mousemove", function (event) {
  

    movingBar.style.left = (event.clientX - 30) + "px";
  });


  // converting one brick into a wall (jadu)

  const fragment = document.createDocumentFragment();
  // fragment creates a temporary div(basket) which we can use to insert all the bricks and will append the fragment so that dom don't need to refresh every time when one bricks add to the dom using the following loop

  // Find the template brick
  const originalBrick = document.querySelector(".bricks");

  for (let i = 0; i < 40; i++) {
    // note - cloneNode(true): Deep clone. Copies the node, its attributes, and all descendants.cloneNode(false) (or just cloneNode()): Shallow clone. Copies only the node itself and its attributes, but ignores any child nodes or text

    // using newbrick to copy the brick to make it easy to call it instead calling the whole originalBrick.cloneNode(true)

    const newBrick = originalBrick.cloneNode(true);
    fragment.appendChild(newBrick);
  }
  

  // Make sure you select the container properly (document.container isn't standard)
  document.querySelector(".container").appendChild(fragment);


// These store the current position of the ball or initial position of the ball means top =0px and left = px
let x = 100;
let y = 100;

let dx = 5; // horizontal speed
let dy = 5; // vertical speed

function animate() {
  x += dx;
  y += dy;

  // ball bouncing animation when hitting the wall/corner of the box

  // Right wall
  if (x + ball.offsetWidth >= box.offsetWidth + 2) {
    dx = -dx;
  }

  // Left wall
  if (x <= 0) {
    dx = -dx;
  }

  // Bottom wall
 const gameover = document.querySelector("#gameOver");

 if (y + ball.offsetHeight >= box.clientHeight) {
   gameover.style.display = "block";

   return;
 }

  // Top wall
  if (y <= 0) {
    dy = -dy;
  }

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  // creatign a bouncing effect of the ball when hitting the bricks
  const ballRect = ball.getBoundingClientRect();
  const allBricks = document.querySelectorAll(".bricks");
  

  for (const brick of allBricks) {
    const brickRect = brick.getBoundingClientRect();
    if (
      ballRect.right > brickRect.left &&
      ballRect.left < brickRect.right &&
      ballRect.bottom > brickRect.top &&
      ballRect.top < brickRect.bottom
    ) {
      dy = -dy;
      
      brick.remove();
      break; // stop checking other bricks
    }
    }

const barRect = movingBar.getBoundingClientRect();

        if (
      ballRect.right > barRect.left &&
      ballRect.left < barRect.right &&
      ballRect.bottom > barRect.top &&
      ballRect.top < barRect.bottom
    ) {
      dy = -dy;

    }
  
  // creatign a bouncing effect of the ball when hitting the moving bar




  requestAnimationFrame(animate);
}

animate();








