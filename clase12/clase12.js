const alicia = [23, 69, 32]; 
const bob = [12, 67, 43];

function encontrarGanador(a, b) { 
    let puntosPrimerParticipante = 0; 
    let puntosSegundoParticipante = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]){
           puntosPrimerParticipante = puntosPrimerParticipante + 1
        }
        else if (a[i] < b[i]) {
            puntosSegundoParticipante = puntosSegundoParticipante + 1
        }
    }
     if (puntosPrimerParticipante > puntosSegundoParticipante){
         return "primer"
     }
     else if (puntosPrimerParticipante < puntosSegundoParticipante){
         return "segundo"
     }
     else {
        return "ningun"
     }
}

console.log("El ganador es: " + encontrarGanador(alicia, bob) + " participante");










 
 
 
 
 