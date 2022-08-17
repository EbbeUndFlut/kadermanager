const kaderContainer = document.getElementsByClassName('kader')[0]
const teamContainer = document.getElementsByClassName('aufstellung')[0]
const nameInput = document.querySelector('input')

let kader = []
let team = []

const buildPage = () => {
    clearContainer()
    kader.forEach((item) => {
        kaderContainer.appendChild(playerElement(item))
    })
    team.forEach((item) => {
        teamContainer.appendChild(playerElement(item))
    })
}
const addPlayer = () => {
    kader.push(nameInput.value)
    buildPage()
}
const removePlayer = () => {
    console.log('first')
    let index = kader.indexOf(nameInput.value)
    console.log(index)
    kader.splice(index, 1)
    buildPage()
}

const clearContainer = () => {
    kaderContainer.innerHTML = ''
    const heading = document.createElement('h2')
    heading.innerHTML = 'Kader'
    kaderContainer.appendChild(heading)
}
/**
 * Funktion die ein HTML Element erstellt und zurück gibt. 
 * Bitte nutzen um die Spieler anzuzeigen
 */

const playerElement = (playerName) => {
    const container = document.createElement('div')
    container.setAttribute('class', 'playerContainer')
    const pTag = document.createElement('p')
    const text = document.createTextNode(playerName)
    pTag.appendChild(text)
    container.appendChild(pTag)

    return container
}

buildPage()