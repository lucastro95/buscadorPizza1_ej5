const cards = document.querySelector('.cards')

export function cleanHTML() {
    while(cards.firstChild) {
        cards.removeChild(cards.firstChild)
    }
}