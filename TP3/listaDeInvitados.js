let lista = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"]
lista.sort()
let listaAdmitidos = []
let listaRechazados = []

for (var i = 0; i < lista.length; i++) {
    if (lista[i] == "Sofia" || lista[i] == "Jose") {
        listaRechazados.push(lista[i])
    }
    else { listaAdmitidos.push(lista[i])}
}

console.log("La lista de invidtados admitidos ORDENADA es: ")
for (var i = 0; i < listaAdmitidos.length; i++) {
  console.log(listaAdmitidos[i])
}

console.log("La lista de invidtados rechazados ORDENADA es: ")
for (var i = 0; i < listaRechazados.length; i++) {
    console.log(listaRechazados[i])
}

