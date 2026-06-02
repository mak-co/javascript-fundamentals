
const ball = document.querySelector("#ball");
const box = document.querySelector("#box");

const container = document.querySelector(".container")

// These store the current position of the ball or initial position of the ball means top =0px and left = px
let x = 0;
let y = 0;

let dx = 5; // horizontal speed
let dy = 5; // vertical speed

function animate() {
  x += dx;
  y += dy;

  // Right wall
  if (x + ball.offsetWidth >= box.offsetWidth+2) {
    dx = -dx;
  }

  // Left wall
  if (x <= 0) {
    dx = -dx;
  }

  // Bottom wall
  if (y + ball.offsetHeight >= box.clientHeight) {
    dy = -dy;
  }

  // Top wall
  if (y <= 0) {
    dy = -dy;
  }

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();


// converting one brick into a wall (jadu)

const fragment = document.createDocumentFragment();
// fragment creates a temporary div(basket) which we can use to insert all the bricks and will append the fragment so that dom don't need to refresh every time when one bricks add to the dom using the following loop


// Find the template brick
let originalBrick = document.querySelector(".bricks");

for (let i = 0; i < 40; i++) {

  // note - cloneNode(true): Deep clone. Copies the node, its attributes, and all descendants.cloneNode(false) (or just cloneNode()): Shallow clone. Copies only the node itself and its attributes, but ignores any child nodes or text

  // using newbrick to

  let newBrick = originalBrick.cloneNode(true);
  fragment.appendChild(newBrick);
}

// Make sure you select the container properly (document.container isn't standard)
document.querySelector(".container").appendChild(fragment);


// Making "MovingBar" movable

let movingBar= document.querySelector("#movingBar")
window.addEventListener("mousemove",function(event){

  console.log(event.clientX)
  movingBar.style.left= event.clientX +"px"
})





let ballReact = ball.getBoundingClientRect()
let brickReact = newBrick.getBoundingClientRect()

if (
  ballRect.right > brickRect.left &&
  ballRect.left < brickRect.right &&
  ballRect.bottom > brickRect.top &&
  ballRect.top < brickRect.bottom
) {
  console.log("Collision!");
}


if (
  ballRect.right > brickRect.left &&
  ballRect.left < brickRect.right &&
  ballRect.bottom > brickRect.top &&
  ballRect.top < brickRect.bottom
) {
  dx = -dx;
  dy = -dy;
}
