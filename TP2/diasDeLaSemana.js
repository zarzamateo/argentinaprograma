console.log("Ingrese un número del 1 al 7")
let dia = prompt()

switch (dia) {
    case '1':
        console.log("Hoy es lunes")
        break;
    case '2':
        console.log("Hoy es martes")
        break;
    case '3':
        console.log("Hoy es miercoles")
        break;
    case '4':
        console.log("Hoy es jueves")
        break;
    case '5':
        console.log("Hoy es viernes")
        break;
    case '6':
        console.log("Hoy es sabado")
        break;
    case '7':
        console.log("Hoy es domingo")
        break;
    default:
        console.log("El número ingresado es inválido")
}
