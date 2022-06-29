import { datoBusqueda } from "./app.js";
import { cleanHTML } from "./cleanHTML.js";
import { pizzas } from "./db.js"
import showError from "./error.js"
import showPizzas from "./show_pizzas.js"



export default function filterPizzas() {
    const result = pizzas.filter(filterNombre);

    if (result.length) {
        showPizzas(result);
    } else {
        cleanHTML()
        showError('No se encontraron resultados');
    }
};

function filterNombre(pizza) {
    if(datoBusqueda.nombre) {
        console.log('Encontrado');
        return pizza.nombre === datoBusqueda.nombre
    }
    return pizza
}