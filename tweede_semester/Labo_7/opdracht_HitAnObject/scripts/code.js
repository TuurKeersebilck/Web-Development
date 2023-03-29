let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 1000,
    score: 0,
    timeoutId: 0
  };

const setup = () => {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", start);
  };
  
const start =() => {
    if(global.timeoutId === 0){
    global.timeoutId = setInterval(veranderLocatieImage,global.MOVE_DELAY);
    }
};

const veranderLocatieImage = () => {
    let image = document.getElementById("target");
    image.addEventListener("click", veranderImage);

    // locatie van afbeelding veranderen wanneer geklikt word
    let speelveld = document.getElementById("playField");
    let maxLeft = speelveld.clientWidth - image.offsetWidth;
    let maxHeight = speelveld.clientHeight - image.offsetHeight;
      
    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    image.style.left = left + "px";
    image.style.top = top + "px";
    
};

  const veranderImage =() => {
    let image = document.getElementById("target");
    const randomIndex = Math.floor(Math.random() * global.IMAGE_COUNT);
    const imagePath = global.IMAGE_PATH_PREFIX + randomIndex + global.IMAGE_PATH_SUFFIX;
    image.src = imagePath;
};
  
  window.addEventListener("load", setup);
  