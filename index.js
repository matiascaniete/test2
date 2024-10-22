var numeroA = 2;
var numeroB = 4;


console.log(numeroA, numeroB);

function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

function mult1(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
    
}

function mult2(x, y) {
    var resultado = 0;


    for (let index = 0; index < y; index++) {

        resultado = suma(resultado, x)

    }

    return resultado
}


console.log(mult1(numeroA, numeroB), mult2(numeroA, numeroB))


var numero = 10;

if (numero > 10) {
    console.log("el numero es mayor o igual que 10")
} else {
    console.log("el numero no es mayor que 10")
}
    console.log(div(9, 5))

