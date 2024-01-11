import { data } from './data.js';
// const emoji = await fetch("https://emoji.ymatuhin.workers.dev/")
// const data = await emoji.json()

renderCard(data);
randomFavicon(data);

const cards = Array.from(document.querySelectorAll('.card'));
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', (event) => {
    const inputText = event.target.value.toLowerCase();
    
    hideCard(cards, true);
    
    cards.forEach((card) => {
        const title = card.querySelector('h2').innerText.toLowerCase();
        const keywords = card.querySelector('p').innerText.toLowerCase();
        
        const displayStyle = (title.includes(inputText) || keywords.includes(inputText)) ? 'flex' : 'none';
        card.style.display = displayStyle;
    });
    
    event.target.value = '';
});

h1.addEventListener('click', () => {
    hideCard(cards, false);
});

function randomFavicon(data) {
    const randomNumb = Math.floor(Math.random() * data.length);
    const randomImg = data[randomNumb].symbol;
    const title = document.querySelector('title');
    title.innerHTML = `Emoji ${randomImg}`;
}

function renderCard(data) {
    data.forEach((el) => {
        el.keywords = delDoubleKeywords(el.keywords);
        createCard(el);
    });
}

function delDoubleKeywords(keyword) {
    const keywordsWithDoubles = keyword.toLowerCase().split(' ');
    const keywordsWithoutDoub = Array.from(new Set(keywordsWithDoubles)).join(' ');
    return keywordsWithoutDoub;
}

function createCard(obj) {
    const main = document.querySelector("section");
    const card = document.createElement('div');
    card.className = "card";

    const emoji = document.createElement('div');
    emoji.innerText = obj.symbol;
    emoji.className = "emoji";

    const h2 = document.createElement('h2');
    h2.innerText = obj.title;

    const p = document.createElement('p');
    p.innerText = obj.keywords;

    main.appendChild(card);
    card.append(emoji, h2, p);
}

function hideCard(cards, isShow) {
    cards.forEach((card) => {
        card.style.display = isShow ? 'none' : 'flex';
    });
}
