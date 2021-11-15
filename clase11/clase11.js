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
let eliminado = nuevoArrayAnimadas.pop()

return nuevoArrayAnimadas;
}

let peliculasAnimadasMayuscula =(convertirAMayusculas(peliculasAnimadas));
console.log(peliculasAnimadasMayuscula);



function pasajeDeElementos(array1, array2) {
    
    for (let i = 0; i < array2.length; i++) {  
      array1.push(array2[i])
    }
    return array1
}

console.log(pasajeDeElementos(peliculasMayuscula, peliculasAnimadasMayuscula))

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones (score1, score2){
    let comparacionesAsiaEuropa =[];
    for (let i = 0; i < score2.length; i++) {   
        comparacionesAsiaEuropa[i] = score1[i] === score2[i]     
    }
    return comparacionesAsiaEuropa
}

console.log(compararCalificaciones(asiaScores, euroScores));



//Extra bonus
//Ejercicio 1
let clavadosParticipanteA=[5,8,4,9,5];
let clavadosParticipanteB=[8,7,8,6,8];
let clavadosParticipanteC=[7,5,10,8,3];

function imprimirParticipantes(array){
    for (let i = 0; i <array.length; i++) {
        console.log("Clavado "+(i+1)+" = "+array[i]+" Pts."); 
    }
}

//console.log("\nParticipante A: "+imprimirParticipantes(clavadosParticipanteA));
//console.log("\nParticipante B: "+imprimirParticipantes(clavadosParticipanteB));
//console.log("\nParticipante C: "+imprimirParticipantes(clavadosParticipanteC));


//Ejercicio 2
function puntajePromedio(array){
    let suma=0;
    for(i=0;i<array.length;i++){
      suma+=array[i];  
    }
    return suma/array.length;
}

console.log("Puntaje promedio Participante A : "+puntajePromedio(clavadosParticipanteA));
console.log("Puntaje promedio Participante B : "+puntajePromedio(clavadosParticipanteB));
console.log("Puntaje promedio Participante C : "+puntajePromedio(clavadosParticipanteC));


//Ejercicio 3
function puntajeMayor(array) {
    let mayor=0;
    for(i=0;i<array.length;i++){
        if(array[i]>mayor){
            mayor=array[i];
        }
    }
    return mayor;
}

console.log("Mayor Puntaje del participante A: "+puntajeMayor(clavadosParticipanteA));
console.log("Mayor Puntaje del participante B : "+puntajeMayor(clavadosParticipanteB));
console.log("Mayor Puntaje del participante C : "+puntajeMayor(clavadosParticipanteC));


//Ejercicio 4
function competencia(array1,array2,array3){
    if(puntajeMayor(array1)>puntajeMayor(array2) && puntajeMayor(array1)>puntajeMayor(array3)){
        
        console.log("El Participante con mayor puntaje es el Participante A: "+puntajeMayor(array1));
    }
    else if(puntajeMayor(array2)>puntajeMayor(array1) && puntajeMayor(array2)>puntajeMayor(array3)){

        console.log("El Participante con mayor puntaje es el Participante B: "+puntajeMayor(array2))
    }
    else{

        console.log("El Participante con mayor puntaje es el Participante C: "+puntajeMayor(array3))
    }
    if(puntajePromedio(array1)>puntajePromedio(array2) && puntajePromedio(array1)>puntajePromedio(array3)){
        
        console.log("El Participante con mayor promedio es el Participante A: "+puntajePromedio(array1))
    }
    else if(puntajePromedio(array2)>puntajePromedio(array1) && puntajePromedio(array2)>puntajePromedio(array3)){

        console.log("El Participante con mayor promedio es el Participante B: "+puntajePromedio(array2));
    }
    else{
        console.log("El Participante con mayor promedio es el Participante C: "+ puntajePromedio(array3));
    }

}

console.log(competencia(clavadosParticipanteA,clavadosParticipanteB,clavadosParticipanteC));

