import { ingresoNombreJugador, menuPersonajes, jugadorInvocaCampeon }   from "./menu.js";
import { ahri, batalla } from "./personajes.js"

console.log("Bienvenidos a League of Michis")


export const jugador1 = {
    nombre : "",
    campeon : ahri,
}
export const jugador2 = {
    nombre : "",
    campeon : ahri,
}

//Ingreso de los nombres 
console.log("JUGADOR 1")
jugador1.nombre = ingresoNombreJugador()
console.log("JUGADOR 2")
jugador2.nombre = ingresoNombreJugador()

//Seleccion de campeon
console.log (`${jugador1.nombre} selecciona tu campeon!`)
jugadorInvocaCampeon(jugador1, menuPersonajes())
console.log (`${jugador1.nombre} elegiste ${jugador1.campeon.nombre}`)

console.log (`${jugador2.nombre} selecciona tu campeon!`)
jugadorInvocaCampeon(jugador2, menuPersonajes())
console.log (`${jugador2.nombre} elegiste ${jugador2.campeon.nombre}`)

//Empieza la batalla a muerte!

batalla(jugador1, jugador2)