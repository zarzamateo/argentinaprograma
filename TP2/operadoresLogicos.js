console.log("Ingrese un número entero")
let num = prompt()

if (num == 0) {
    console.log("El numero ingresado es 0")
} else if (num < 0) {
    console.log("El numero ingresado es negativo")
} else if (num % 2 == 0) {
    console.log("El numero ingresado es positvo y divisible por 2")
} else {
    console.log("El numero ingresado es positvo pero no es divisible por 2")
}