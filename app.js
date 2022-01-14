const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 5;

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
}

cardGenerator();