let global = {
  IMAGE_COUNT: 5,
  IMAGE_SIZE: 48,
  IMAGE_PATH_PREFIX: "images/",
  IMAGE_PATH_SUFFIX: ".png",
  MOVE_DELAY: 1000,
  score: 0,
  timeoutId: 0,
  targetGeraakt: false
};

const setup = () => {
  let startButton = document.getElementById("startButton");
  startButton.addEventListener("click", start);
};

const start = () => {
  if (global.timeoutId === 0) {
    global.timeoutId = setInterval(veranderLocatieImage, global.MOVE_DELAY);
    let startButton = document.getElementById("startButton");
    startButton.style.display = "none";
  }
};

const veranderLocatieImage = () => {

  let image = document.getElementById("target");
  let speelveld = document.getElementById("playField");
  let maxLeft = speelveld.clientWidth - image.offsetWidth;
  let maxHeight = speelveld.clientHeight - image.offsetHeight;
  let left = Math.floor(Math.random() * maxLeft);
  let top = Math.floor(Math.random() * maxHeight);
  image.style.left = left + "px";
  image.style.top = top + "px";

  veranderImage();
  if (!global.targetGeraakt) {
    image.addEventListener("click", targetHit);
  }
};

const veranderImage = () => {
  let image = document.getElementById("target");
  let randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
  let imagePath = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
  image.src = imagePath;
};

const targetHit = () => {
  clearInterval(global.timeoutId);
  global.timeoutId = 0;

  let image = document.getElementById("target");
  let imagePath = image.getAttribute("src");
  if(imagePath.endsWith("0.png")){
    global.targetGeraakt = false;
    global.score = 0;
    document.getElementById("score").textContent = global.score;
    alert("GAME OVER");
  }
  else{
    global.targetGeraakt = true;
    global.score++;
    document.getElementById("score").textContent = global.score;
    veranderLocatieImage();
    start();
  }
};



window.addEventListener("load", setup);
