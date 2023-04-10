// import {data as emoji} from './data.js'
const emoji = await fetch("https://emoji.ymatuhin.workers.dev/")
const data = await emoji.json()

renderCard(data)
randomFavicon(data)

const card = Object.values(document.querySelectorAll('.card'))
const input = document.querySelector('input')
const h1 = document.querySelector('h1')

input.addEventListener('change', (event) => {
    hideCard(card, true)
    let inputText = event.target.value.toLowerCase()
    card.map((el) => {
        let title = el.children[1].innerText.toLowerCase()
        let keywords = el.children[2].innerText.toLowerCase()
        if (title.includes(inputText) || keywords.includes(inputText)){ 
            el.style.display="flex"
        }
    })
    event.target.value = ''
})

h1.addEventListener('click', () => {
    hideCard(card, false)
})

function randomFavicon(emoji){
    let randomNumb = Math.floor(Math.random() * emoji.length) + 1
    let randomImg = emoji[randomNumb].symbol
    let title = document.querySelector('title')
    title.innerHTML = `Emoji ${randomImg}`
}

function renderCard(data){
    data.forEach(el => {
        el.keywords = delDoubleKeywords(el.keywords)
        createCard(el)
    })
}

function delDoubleKeywords(keyword){
    let keywordsWithDoubles = keyword.toLowerCase().split(' ')
    let keywordsWithoutDoub = []
    keywordsWithDoubles.map((el) => {
        if(!keywordsWithoutDoub.includes(el)){
            keywordsWithoutDoub.push(el)
        }
    })
    keywordsWithoutDoub = keywordsWithoutDoub.join(' ')
    return keywordsWithoutDoub
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

function hideCard(card, isShow) {
    card.map((el) => {
        el.style = isShow ? 'display: none;' : 'display: flex;'
    })
}

