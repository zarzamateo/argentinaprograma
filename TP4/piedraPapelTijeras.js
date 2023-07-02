function obtenerJugadaComputadora() {
    let opciones = ["piedra", "papel", "tijeras"]
    let random = Math.floor(Math.random() * 3)
    return opciones[random]
}

function obtenerJugadaUsuario() {
    console.log("Ingrese su jugada:" +
        " 0- Piedra" +
        " 1- Papel" +
        " 2- Tijeras")
    let opciones = ["piedra", "papel", "tijeras"]
    let jugada = prompt()
    return opciones[jugada]
}

function determinarGanador(jugada, respuesta) {

    if (jugada == respuesta) {
        console.log("Empate! Su jugada: " + jugada)
        console.log("Jugada de la máquina: " + respuesta)
    }

    else if (jugada == "piedra" && respuesta == "tijeras" ||
             jugada == "tijeras" && respuesta == "papel" ||
             jugada == "papel" && respuesta == "piedra")
    {
        console.log("Has ganado! Su jugada: " + jugada)
        console.log("Jugada de la máquina: " + respuesta)
    }

    else {
        console.log("Has perdido... Su jugada: " + jugada)
        console.log("Jugada de la máquina: " + respuesta + "Suerte la próxima!")
    }
}

let consola = obtenerJugadaComputadora()
let jugada = obtenerJugadaUsuario()
determinarGanador(jugada, consola)