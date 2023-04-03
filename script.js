import {data as emoji} from './data.js'

function renerCard(data){
    data.forEach(el => createCard(el))
    data.forEach(el => checkKeywords(el.keywords))
}

function checkKeywords(keyword){
    let words = keyword.toLowerCase().split(' ')
    let words2 = []
    for(let i=0; i<words.length; i++){
        if(!words2.includes(words[i])){
            words2.push(words[i])
        }
    }
    words2 = words2.join(' ')
    return words2
}

renerCard(emoji)

const card = document.querySelectorAll('.card')

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
    p.innerText = checkKeywords(obj.keywords)

    main.append(card)
    card.append(emoji, h2, p)
}

function hideCard(card) {
    for (let i=0; i<card.length; i++){
        card[i].style = 'display: none;'
    }
}

let input = document.querySelector('input')

input.addEventListener('change', (event) => {
    hideCard(card)
    let text = event.target.value
    for(let i=0; i<card.length; i++){
        if (card[i].children[1].innerText.toLowerCase().includes(text.toLowerCase()) || card[i].children[2].innerText.toLowerCase().includes(text.toLowerCase())){ 
            card[i].style="display: flex;"
        }
    }
    event.target.value = ''
})

let h1 = document.querySelector('h1')
h1.addEventListener('click', () => {
    hideCard()
    renerCard(emoji)
})