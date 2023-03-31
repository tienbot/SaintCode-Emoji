import {data as emoji} from './data.js'

let card = {
    emoji: '💯',
    title: '100',
    keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
}

function renerCard(data){
    data.forEach(el => createCard(el));
}

function createCard(obj) {
    const main = document.body.querySelector("section")
    const card = document.createElement('div')
    card.className = "card"

    const emoji = document.createElement('div')
    emoji.innerText = obj.symbol
    emoji.className = "emoji"

    const h2 = document.createElement('h2')
    h2.innerText = obj.title

    const p = document.createElement('p')
    p.innerText = obj.keywords

    main.append(card)
    card.append(emoji, h2, p)
}

renerCard(emoji)
// createCard(card)