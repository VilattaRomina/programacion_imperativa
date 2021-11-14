// Ejercicio 1

let peliculas=["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function convertirAMayusculas(array){
    let nuevoArray = [];
    for (let i= 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase())
    }
    return nuevoArray;
}

    let peliculasMayuscula =(convertirAMayusculas(peliculas));
    console.log(peliculasMayuscula);


// Ejercicio 2
let peliculasAnimadas=["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function convertirAMayusculas(array){
    let nuevoArrayAnimadas = [];
for (let i= 0; i < array.length; i++) {
     nuevoArrayAnimadas.push (array[i].toUpperCase())
}
return nuevoArrayAnimadas;
}

let peliculasAnimadasMayuscula =(convertirAMayusculas(peliculasAnimadas));
console.log(peliculasAnimadasMayuscula);



// function pasajeDeElementos(array1, array2) {
    
//     for (let i = 0; i < array2.length; i++) {  
//       array1.push(array2)
//     }
//     return array1
// }

// console.log(pasajeDeElementos(peliculasMayuscula, peliculasAnimadasMayuscula))

