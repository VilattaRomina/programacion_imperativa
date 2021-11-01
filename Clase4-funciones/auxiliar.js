let cajonRemeras ="pantalones"
let cajonPantalones = "remeras"

console.log("antes de los cambios");
console.log("cajon de remeras: " + cajonRemeras);
console.log("cajon de pantalones: " + cajonPantalones);

let enLaCama = cajonRemeras
cajonRemeras = cajonPantalones
cajonPantalones = enLaCama

console.log("despues de los cambios")
console.log("cajon de remeras: " + cajonRemeras);
console.log("cajon de pantalones: " + cajonPantalones);

