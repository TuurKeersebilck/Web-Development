let AANTAL_HORIZONTAAL = 4;
let AANTAL_VERTICAAL = 3;
let AANTAL_KAARTEN = 6;
let score = 0;

const cards = new Map([["kaart1", 'img/kaart1.jpg'],["kaart2", 'img/kaart2.jpg'],["kaart3", 'img/kaart3.jpg'],["kaart4", 'img/kaart4.jpg'],["kaart5", 'img/kaart5.jpg'],["kaart6", 'img/kaart6.jpg']])

const setup = () => {
    generateCards()
    setTimeout(hideCards,10);
    shuffle()
}

const generateCards = () => {
    let cardsField = document.getElementById("cards");
    let cardsArray = Array.from(cards.keys());

    for(let i = 0; i < AANTAL_KAARTEN; i++){
        let kaart1 = document.createElement("img");

        kaart1.src = cards.get(cardsArray[i]);
        kaart1.className = "kaart";
        kaart1.setAttribute("kaartNaam", cardsArray[i]);
        kaart1.addEventListener("click", draaiKaart);
        cardsField.appendChild(kaart1);

        let kaart2 = document.createElement("img");
        kaart2.src = cards.get(cardsArray[i]);
        kaart2.className = "kaart";
        kaart2.setAttribute("kaartNaam", cardsArray[i]);
        kaart2.addEventListener("click", draaiKaart);
        cardsField.appendChild(kaart2);
    }
}

const shuffle = () => {
    let cards = document.getElementsByClassName("kaart");
    let cardsArray = Array.from(cards);
    let shuffledCards = cardsArray.sort(() => Math.random() - 0.5);
    let cardsField = document.getElementById("cards");
    for (let i = 0; i < cards.length; i++) {
        cardsField.appendChild(shuffledCards[i]);
    }
}

const hideCards = () => {
    let cards = document.getElementsByClassName("kaart");
    for(let i = 0; i < cards.length; i++) {
        cards[i].setAttribute("src", "img/achterkant.png");
    }
}

const draaiKaart = (event) => {
    let kaart = event.target;
    kaart.setAttribute("src",cards.get(kaart.getAttribute("kaartNaam")));
    kaart.removeEventListener("click", draaiKaart);
    controleerKaart(kaart);
}

const controleerKaart = (kaart) => {
    let cards = document.getElementsByClassName("kaart");
    let flippedCards = [];
    for(let i = 0; i < cards.length; i++){
        if(cards[i].getAttribute("src") !== "img/achterkant.png") {
            flippedCards.push(cards[i]);
        }
    }
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("kaartNaam") === flippedCards[1].getAttribute("kaartNaam")) {
            flippedCards[0].removeEventListener("click", draaiKaart);
            flippedCards[1].removeEventListener("click", draaiKaart);
            flippedCards[0].style.visibility = "hidden";
            flippedCards[1].style.visibility = "hidden";
            score++;
            updateScore()
            resetKaarten()
        } 
        else{
            setTimeout(resetKaarten, 1000);
        }
    }
}

const resetKaarten = () => {
    let cards = document.getElementsByClassName("kaart");
    for(let i = 0; i < cards.length; i++){
        cards[i].setAttribute("src", "img/achterkant.png");
        cards[i].addEventListener("click", draaiKaart);
    }
}

const updateScore = () => {
    let scoreElement = document.getElementById("score");
    let scoreText = document.createTextNode(score);

    scoreElement.firstChild.remove()
    scoreElement.appendChild(scoreText);
}

window.addEventListener('load', setup);