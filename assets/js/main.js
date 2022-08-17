




















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