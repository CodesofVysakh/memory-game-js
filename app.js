const section = document.querySelector("section");
let playerLivesCount = document.querySelector("span");
let playerLives = 5;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "./images/car.jpeg", name: "car"},
    { imgSrc: "./images/cricket.jpeg", name: "cricket"},
    { imgSrc: "./images/emoji.jpeg", name: "emoji"},
    { imgSrc: "./images/green.jpeg", name: "green"},
    { imgSrc: "./images/interior.jpeg", name: "interior"},
    { imgSrc: "./images/marshmellow.jpeg", name: "marshmellow"},
    { imgSrc: "./images/moon-tree.jpeg", name: "moon-tree"},
    { imgSrc: "./images/panda.jpeg", name: "panda"},
    { imgSrc: "./images/car.jpeg", name: "car"},
    { imgSrc: "./images/cricket.jpeg", name: "cricket"},
    { imgSrc: "./images/emoji.jpeg", name: "emoji"},
    { imgSrc: "./images/green.jpeg", name: "green"},
    { imgSrc: "./images/interior.jpeg", name: "interior"},
    { imgSrc: "./images/marshmellow.jpeg", name: "marshmellow"},
    { imgSrc: "./images/moon-tree.jpeg", name: "moon-tree"},
    { imgSrc: "./images/panda.jpeg", name: "panda"},
];

const randomize = () => {
    const cardData = getData();

    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData, "random() cardDAta");
    return cardData;
};

const cardGenerator = () => {
    const cardDetails = randomize();
    console.log(cardDetails, "cardDetails");
    const cards = document.querySelector(".card");
    cardDetails.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        
        console.log(item);
        //Attach src to img
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        //Attach cards to section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
};

const checkCards = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard, "clickedCard");
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");

    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            flippedCards.forEach( card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            })
        } else {
            flippedCards.forEach( card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            })
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart("Game Over!! Try Again!!!");
            }
        }
    }
    if(toggleCard.length === 16) {
        restart("You Won!!!");
    }
};

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");

        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000)
    })
    // alert("Game Over!!!");
    playerLives = 5;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100)
}

cardGenerator();