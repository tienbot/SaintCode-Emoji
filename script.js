let card = {
    emoji: '💯',
    title: '100',
    keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
}


function createCard(obj) {
    const main = document.body.querySelector("section")
    const card = document.createElement('div')
    card.className = "card"

    const emoji = document.createElement('div')
    emoji.innerText = obj.emoji
    emoji.className = "emoji"

    const h2 = document.createElement('h2')
    h2.innerText = obj.title

    const p = document.createElement('p')
    p.innerText = obj.keywords

    main.append(card)
    card.append(emoji, h2, p)
}

createCard(card)
createCard(card)
createCard(card)
createCard(card)