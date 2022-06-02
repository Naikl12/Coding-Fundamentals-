import { menuDeHabilidades } from "./menu.js"
import { jugador1, jugador2 } from "./main.js"

export const ahri = {
    nombre: "Michi Ahri",
    vida:800,
    mana:600,
    habilidadesUsadas : [0,1,1,1],

    ataque: function(enemigo){              //F
        enemigo.vida-=100
        console.log(`-->Michi Ahri atacó a ${enemigo.nombre}`)
        console.log(`--Daño infligido: 100`)
        return true
    },

    habilidadBasica: function(enemigo){     //Q
        if(this.mana>=100){
            enemigo.vida-=250
            this.mana-=150
            this.vida+=150
            console.log(`-->Michi Ahri lanzo un orbe a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 250`)
            console.log(`--Mana consumido: 150`)
            console.log(`--Vida regenerada: 150`)
            return true
        }else {
            console.log(`Ahri no tiene suficiente mana: ${this.mana}`)
            return false
        }
    },

    habilidadSecundaria: function(enemigo){    //W
        
        if(this.habilidadesUsadas[1] && this.mana>=200) {
            enemigo.vida-=200
            this.mana-=150
            this.habilidadesUsadas[1] = 0
            console.log(`-->Michi Ahri lanzo fuego zorruno a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 200`)
            console.log(`--Mana consumido: 150`)
            return true
        }else {
            if(!this.habilidadesUsadas[1]){
                console.log(`Ahri ya utilizo su fuego zorruno`)
            }else{
                console.log(`Ahri no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    },

    habilidadDeControl: function(enemigo){    //E
        
        if(this.habilidadesUsadas[2] && this.mana>=200) {
            this.mana-=200
            this.habilidadesUsadas[2] = 0
            console.log(`-->Ahri hechizo a ${enemigo.nombre} y pierde su turno.`)
            console.log(`--Mana consumido: 200`)
            return true
        }else {
            if(!this.habilidadesUsadas[2]){
                console.log(`Ahri ya utilizo su hechizo`)
            }else{
                console.log(`Ahri no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    },

    

    habilidadDefinitiva: function(enemigo){    //R  
        
        if(this.habilidadesUsadas[3] && this.mana>=200) {
            enemigo.vida-= 400
            this.mana-=200
            this.habilidadesUsadas[3] = 0
            console.log(`-->Definitiva de Ahri: Impulso espirual a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 400`)
            console.log(`--Mana consumido: 200`)
            return true
        }else {
            if(!this.habilidadesUsadas[3]){
                console.log(`Ahri ya utilizo su definitiva`)
            }else{
                console.log(`Ahri no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    }
}

export const poppy = {
    nombre: "Michi Poppy",
    vida:1000,
    mana:400,
    habilidadesUsadas : [0,1,1,1],

    ataque: function(enemigo){              //F
        enemigo.vida-=120
        console.log(`-->Poppy atacó a ${enemigo.nombre}`)
        console.log(`--Daño infligido: 150`)
        return true
    },

    habilidadBasica: function(enemigo){     //Q
        if(this.mana>=150){
            enemigo.vida-=200
            this.mana-=150
            console.log(`-->Poppy: impacto de martillo a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 200`)
            console.log(`--Mana consumido: 150`)
            return true
        }else {
            console.log(`Poppy no tiene suficiente mana: ${this.mana}`)
            return false
        }
    },

    habilidadSecundaria: function(enemigo){    //W
        
        if(this.habilidadesUsadas[1] && this.mana>=200) {
            enemigo.vida-=200
            this.mana-=150
            this.habilidadesUsadas[1] = 0
            console.log(`-->Michi Poppy lanzo martillazo a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 200`)
            console.log(`--Mana consumido: 150`)
            return true
        }else {
            if(!this.habilidadesUsadas[1]){
                console.log(`Poppy ya utilizo su martillazo`)
            }else{
                console.log(`Poppy no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    },

    habilidadDeControl: function(enemigo){    //E
        
        if(this.habilidadesUsadas[2] && this.mana>=150) {
            this.mana-=150
            this.habilidadesUsadas[2] = 0
            console.log(`-->Poppy aturde a ${enemigo.nombre} y pierde su turno.`)
            console.log(`--Mana consumido: 150`)
            return true
        }else {
            if(!this.habilidadesUsadas[2]){
                console.log(`Poppy ya utilizo su carga heroica que aturde`)
            }else{
                console.log(`Poppy no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    },

    habilidadDefinitiva: function(enemigo){    //R                     
        if(this.habilidadesUsadas[3] && this.mana>=200) {
            enemigo.vida-= 400
            this.mana-=200
            this.habilidadesUsadas[3] = 0
            console.log(`-->Defnitiva de Poppy: Veredicto de la guardiana a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 400`)
            console.log(`--Mana consumido: 200`)
            return true
        }else {
            if(!this.habilidadesUsadas[3]){
                console.log(`Poppy ya utilizo su definitiva`)
            }else{
                console.log(`Poppy no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    }
}

export const teemo = {
    nombre: "Michi Teemo",
    vida:900,
    mana:400,
    habilidadesUsadas : [0,1,1,1],

    ataque: function(enemigo){              //F
        enemigo.vida-=150
        console.log(`-->Teemo atacó a ${enemigo.nombre}`)
        console.log(`--Daño infligido: 150`)
        return true
    },

    habilidadBasica: function(enemigo){     //Q
        if(this.mana>=150){
            enemigo.vida-=200
            this.mana-=150
            console.log(`-->Teemo lanzo un dardo a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 200`)
            console.log(`--Mana consumido: 150`)
            return true
        }else {
            console.log(`Teemo no tiene suficiente mana: ${this.mana}`)
            return false
        }
    },

    habilidadSecundaria: function(enemigo){    //W
        
        if(this.habilidadesUsadas[1] && this.mana>=100) {
            enemigo.vida-=200
            this.mana-=100
            this.habilidadesUsadas[1] = 0
            console.log(`-->Michi Teemo lanza un tiro tóxico a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 200`)
            console.log(`--Mana consumido: 100`)
            return true
        }else {
            if(!this.habilidadesUsadas[1]){
                console.log(`Teemo ya utilizo su tiro tóxico`)
            }else{
                console.log(`Teemo no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    },

    habilidadDeControl: function(enemigo){    //E
        
        if(this.habilidadesUsadas[2] && this.mana>=100) {
            this.mana-=100
            this.habilidadesUsadas[2] = 0
            console.log(`-->Teemo lanza un dardo cegador a ${enemigo.nombre} y pierde su turno.`)
            console.log(`--Mana consumido: 100`)
            return true
        }else {
            if(!this.habilidadesUsadas[2]){
                console.log(`Teemo ya utilizo su hechizo`)
            }else{
                console.log(`Teemo no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    },

    habilidadDefinitiva: function(enemigo){    //R                     
        if(this.habilidadesUsadas[3] && this.mana>=200) {
            enemigo.vida-= 400
            this.mana-=200
            this.habilidadesUsadas[3] = 0
            console.log(`-->Definitiva de Teemo: Trampa ponzoñosa a ${enemigo.nombre}`)
            console.log(`--Daño infligido: 400`)
            console.log(`--Mana consumido: 200`)
            return true
        }else {
            if(!this.habilidadesUsadas[3]){
                console.log(`Teemo ya utilizo su definitiva`)
            }else{
                console.log(`Teemo no tiene suficiente mana: ${this.mana}`)
            }
            return false      
        }
    }
}


//FUNCIONES generales para la batalla:

export function batalla(pj1, pj2){
    while(pj1.campeon.vida>0 && pj2.campeon.vida>0){


        console.log(`_________________${pj1.nombre}___________________`)

        //Turno de pj1:
        console.log(`Es el turno de ${pj1.nombre}`)
        estadoDelCampeon(pj1)
        if(movimientoDelJugador(pj1.campeon, pj2.campeon)){
            console.log(movimientoDelJugador(pj1.campeon, pj2.campeon))
            console.log(`Pierdes tu turno ${pj2.nombre}`)
        }else{
            console.log(`_________________${pj2.nombre}__________________`)

            //Turno de pj2:
            console.log(`Es el turno de ${pj2.nombre}`)
            estadoDelCampeon(pj2)
            movimientoDelJugador(pj2.campeon, pj1.campeon)
        }

    }

    console.log("___________________________________________")
    
    if(pj2.campeon.vida<0){
        pj2.campeon.vida=0
        estadoDelCampeon(pj2)
        console.log(`${pj2.campeon.nombre} fue derrotado`)
        console.log(`${pj1.nombre} has ganado esta batalla!`)
    }else{
        pj1.campeon.vida=0
        estadoDelCampeon(pj1)
        console.log(`${pj1.campeon.nombre} fue derrotado`)
        console.log(`${pj2.nombre} has ganado esta batalla!`)
    }
}


/**
 * Esta funcion ejecuta una habilidad selecionada por el usuario y devuelve 
 * un boolean: true--> Contrincante pierde su turno
 * @param {object} pj1 es el jugador numero 1
 * @param {object} pj2 es el jugador numero 2
 */
function movimientoDelJugador(pj1, pj2){
    let seEjecuto
    let habilidad
    do{
        habilidad = menuDeHabilidades(pj1)
        switch (habilidad){
            case "q":
                seEjecuto = pj1.habilidadBasica(pj2)
            break
            case "w":
                seEjecuto = pj1.habilidadSecundaria(pj2)
                break
            case "e":
                seEjecuto = pj1.habilidadDeControl(pj2)
            break
            case "r":
                seEjecuto = pj1.habilidadDefinitiva(pj2)
            break
            case "f":
                seEjecuto = pj1.ataque(pj2)
            break
        }
        if (!seEjecuto){
            console.log("Escoje otra opción.")
        }
    }while(!seEjecuto)
    if(habilidad=="e"){
        return true
    }else{
        return false
    }
}


// Esta funcion muestra las cantidades de vida, mana y definitiva del campeon
export function estadoDelCampeon(jugador){
    console.log(`Estado de tu ${jugador.campeon.nombre}:`)
    console.log(`Vida: ${jugador.campeon.vida}`)
    console.log(`Mana: ${jugador.campeon.mana}`)
    console.log(`Habilidad Primaria (Q): Siempre disponible`)
    console.log(`Habilidad Secundaria (W): ${jugador.campeon.habilidadesUsadas[1]}`)
    console.log(`Habilidad de Control (E): ${jugador.campeon.habilidadesUsadas[2]}`)
    console.log(`Habilidad Definitiva (R): ${jugador.campeon.habilidadesUsadas[3]}`)
}