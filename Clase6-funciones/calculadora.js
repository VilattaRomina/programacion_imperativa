function sumar(numero1, numero2){
    return numero1 + numero2
}
function restar(numero1, numero2){
    return numero1 - numero2
}

function multiplicar(numero1, numero2){
    return numero1 * numero2
}

function dividir(numero1, numero2){
    return numero1 / numero2
}
console.log("testeo de operaciones/calculadora");
console.log(sumar(3, 5));
console.log(restar(8,6));
console.log(multiplicar(3, 5));
console.log(dividir(8, 2));
console.log(dividir(0,3));


//Funciones extras
function cuadradoDeUnNumero(numero) {
    return multiplicar(numero, numero)
}
console.log(cuadradoDeUnNumero(7));

function promedioDeTresNumeros(numero1, numero2, numero3){
    let resultado= sumar(numero1, numero2)+ numero3
    return dividir(resultado, 3)
}
console.log(promedioDeTresNumeros(1, 2, 3));

function calcularPorcentaje (total, porcentaje){
let resultado = multiplicar(total, porcentaje)
return dividir(resultado, 100)
}
console.log (calcularPorcentaje (300, 15));

function generadorDePorcentaje (numero1, numero2){
    let resultado=multiplicar(numero1, 100)
    return dividir(resultado, numero2)
}

console.log(generadorDePorcentaje(2, 200));
