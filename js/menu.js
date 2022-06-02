import { ahri, poppy, teemo} from "./personajes.js"

//Ingresar el nombre del usuario
export function ingresoNombreJugador (){
    let respuesta
    let nombre
    do{
        nombre = prompt("Ingresa tu nombre")

        do{
            respuesta = prompt(`¿El nombre ${nombre} es correcto?`).toLocaleLowerCase()
        }while(!(respuesta=="si" || respuesta=="no"))

    }while(respuesta=="no")
    return nombre
}

//Menu para elegir el campeon
export function menuPersonajes() {
    let eleccion
    do{
        eleccion = prompt ("Elije un michi! 1:Michi Ahri  2:Michi Poppy  3:Michi Teemo")
    }while(!(eleccion==1 || eleccion == 2 || eleccion == 3))

    return eleccion
}

/**
 * Aqui vinculamos el jugador con su personaje 
 * @param {object} jugador es la direccion del objeto jugador
 * @param {int} eleccion es el numero que corresponde a un personaje
 */

export function jugadorInvocaCampeon(jugador, eleccion) {
    switch (eleccion){
        case "1": 
        jugador.campeon = ahri
        break
        case "2": 
        jugador.campeon = poppy
        break
        case "3": 
        jugador.campeon = teemo
        break
    }
}

//Menu para elegir habilidad
export function menuDeHabilidades(jugador){
    let respuesta

    do{
        respuesta = prompt(`${jugador.nombre} elige tu movimiento: Q: Habilidad basica 
        W: Habilidad Secundaria  E: Habilidad de Control  R: Habilidad definitiva  F:Golpe`).toLocaleLowerCase()
    }while(!(respuesta=="q" || respuesta=="w" || respuesta=="e" || respuesta=="r" || respuesta=="f"))

    return respuesta
}