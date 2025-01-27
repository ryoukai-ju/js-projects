const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]
// shuffling the cardArray everytime (shuffled randomly)
cardArray.sort(()=> 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

let cardChosen = []
const cardChosenId = []
const cardWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)

        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch () {
    const cards = document.querySelectorAll('img')

    // console.log('check for match')
    if (cardChosen[0] == cardChosen[1]){
        alert('You find a match!')
        cards[cardChosenId[0]].setAttribute('src', 'images/white.png')
        cards[cardChosenId[1]].setAttribute('src', 'images/white.png')
        cards[cardChosenId[0]].removeEventListener('click', flipCard)
        cards[cardChosenId[1]].removeEventListener('click', flipCard)
        cardWon.push(cardChosen)
    }

    cardChosen = []
}


function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)

    console.log(cardChosen)
    console.log(cardChosenId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

console.log(cardArray.sort(()=> 0.5 - Math.random()))


























