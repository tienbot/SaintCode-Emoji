let card = {
    emoji: '💯',
    title: '100',
    keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
}


function createCard(obj) {
    const body = document.body
    const card = document.createElement('div')
    card.className = "card"

    const emoji = document.createElement('div')
    emoji.innerText = obj.emoji
    emoji.className = "emoji"

    const h2 = document.createElement('h2')
    h2.innerText = obj.title

    const p = document.createElement('p')
    p.innerText = obj.keywords

    body.append(card)
    card.append(emoji, h2, p)
}

createCard(card)