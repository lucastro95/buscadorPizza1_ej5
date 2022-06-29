import { cleanHTML } from "./cleanHTML.js"

export default function showPizzas(resultado) {
    cleanHTML()
    resultado.map(pizza => {
        const {nombre, ingredientes, precio, url} = pizza

        const cards = document.querySelector('.cards')

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cards__card')

        const img = document.createElement('img')
        img.classList.add('cards__card__img')
        img.src = `${url}`
        cardContainer.appendChild(img)

        const info = document.createElement('div')
        info.classList.add('cards__card__info')
        cardContainer.appendChild(info)

        const title = document.createElement('h2')
        title.innerText = `${nombre}`
        info.appendChild(title)

        const ingTitle = document.createElement('h3')
        ingTitle.innerText = `Ingredientes:`
        info.appendChild(ingTitle)

        const ingredients = document.createElement('ul')
        info.appendChild(ingredients)
        pizza.ingredientes.map(ing => {
            const ingredient = document.createElement('li')
            ingredient.innerText = ing
            ingredients.appendChild(ingredient)
        })

        const price = document.createElement('p')
        price.innerText = `$${precio}`
        info.appendChild(price)

        cards.appendChild(cardContainer)
    }
    )
}