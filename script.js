import {data as emoji} from './data.js'

function renerCard(data){
    data.forEach(el => createCard(el))
    // data.forEach(el => checkKeywords(el))
}


function checkKeywords(keyword){
    let words = keyword.toLowerCase().split(' ')
    let words2 = []
    for(let i=0; i<words.length; i++){
        if(!words2.includes(words[i])){
            words2.push(words[i])
        }
        words2.join('-')
    }

    // console.log(words2)
    return words2
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
    p.innerText = checkKeywords(obj.keywords)
    // p.innerText = obj.keywords

    main.append(card)
    card.append(emoji, h2, p)
}

renerCard(emoji)