
import { cleanHTML } from "./cleanHTML.js"
import { pizzas } from "./db.js"
import showError from "./error.js"
import filterPizzas from "./filter.js"
import showPizzas from "./show_pizzas.js"

const form = document.querySelector('.navBar__form')

export const datoBusqueda = {
    nombre: ''
}

window.addEventListener('load', () => {
    const strPizzas = JSON.stringify(pizzas)
    localStorage.setItem('pizzas', strPizzas)

    showPizzas(pizzas)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const search = document.querySelector('#search').value
        if(!search) {
            showError('No se ha completado el campo de búsqueda')
        } else {
            datoBusqueda.nombre = search
            filterPizzas()
        }
    })
})





