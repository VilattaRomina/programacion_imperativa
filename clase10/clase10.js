/*coleccion de peliculas y mas*/

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fornite"];

/*function convertirAMayusculas(array1, array2){
    let arrayNuevo=[]
    arrayNuevo.push(array1[0].toUpperCase())
    arrayNuevo.push(array1[1].toUpperCase())
    arrayNuevo.push(array1[2].toUpperCase())
    arrayNuevo.push(array1[3].toUpperCase())
    arrayNuevo.push(array1[4].toUpperCase())
    arrayNuevo.push(array2[0].toUpperCase())
    arrayNuevo.push(array2[1].toUpperCase())
    arrayNuevo.push(array2[2].toUpperCase())
    arrayNuevo.push(array2[3].toUpperCase())
    arrayNuevo.push(array2[4].toUpperCase())
    return arrayNuevo
}
 console.log(convertirAMayusculas(peliculas, peliculasAnimadas)); */

//  Otra forma de resolverlo

//  function convertirAMayusculasConMap(array1, array2){
//      let peliculasAAgregar = array1.concat(array2)
//      return peliculasAAgregar.map(elemento => elemento.toUpperCase())
//  }
//  console.log(convertirAMayusculasConMap(peliculas, peliculasAnimadas));

// otra forma
//  function convertirAMayusculas2(array1, array2){
//     let arrayNuevo=[]
//     arrayNuevo[0]=array1[0].toUpperCase()
//     arrayNuevo[1]=array1[1].toUpperCase()
//     arrayNuevo[2]=array1[2].toUpperCase()
//     arrayNuevo[3]=array1[3].toUpperCase()
//     arrayNuevo[4]=array1[4].toUpperCase()
//     arrayNuevo[5]=array2[0].toUpperCase()
//     arrayNuevo[6]=array2[1].toUpperCase()
//     arrayNuevo[7]=array2[2].toUpperCase()
//     arrayNuevo[8]=array2[3].toUpperCase()
//     arrayNuevo[9]=array2[4].toUpperCase()
//     return arrayNuevo
// }

// console.log(convertirAMayusculas2(peliculas, peliculasAnimadas)); 

// 4-

// function convertirAMayusculas2(array1, array2){
//     let peliculasAnimadas2 = array2.pop()
//     let arrayNuevo=[]
//     arrayNuevo[0]=array1[0].toUpperCase()
//     arrayNuevo[1]=array1[1].toUpperCase()
//     arrayNuevo[2]=array1[2].toUpperCase()
//     arrayNuevo[3]=array1[3].toUpperCase()
//     arrayNuevo[4]=array1[4].toUpperCase()
//     arrayNuevo[5]=array2[0].toUpperCase()
//     arrayNuevo[6]=array2[1].toUpperCase()
//     arrayNuevo[7]=array2[2].toUpperCase()
//     arrayNuevo[8]=array2[3].toUpperCase()
//     return arrayNuevo
// }

// console.log(convertirAMayusculas2(peliculas, peliculasAnimadas)); 

// function convertirAMayusculasConMap(array1, array2){
//         let peliculasAnimadasmodificado = array2.pop()
//          let peliculasAAgregar = array1.concat(array2)
//          return peliculasAAgregar.map(elemento => elemento.toUpperCase())
//      }
//      console.log(convertirAMayusculasConMap(peliculas, peliculasAnimadas));
    

// 5- 

// const asiaScores = [8, 10, 6, 8, 10, 6, 6, 9, 5];
// const euroScores = [8, 10, 6, 8, 10, 6, 6, 9, 5];

// function comparacion(score1, score2){
//     if (score1[0] === score2[0] && 
//         score1[1] === score2[1] && 
//         score1[2] === score2[2] && 
//         score1[3] === score2[3] && 
//         score1[4] === score2[4] && 
//         score1[5] === score2[5] && 
//         score1[6] === score2[6] && 
//         score1[7] === score2[7] && 
//         score1[8] === score2[8] ){
//         return "Igual calificacion"
//         }
//     else {
//         return "diferente calificacion"
//     }
// }

    
// console.log(comparacion(asiaScores, euroScores));
 










