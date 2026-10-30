let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];

let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

let compteur = 0;

for (let i = 0; i < array1.length; i++) {

    if (array2.includes(array1[i])) {
        compteur++;
    }

}

console.log("Nombre d'éléments communs :", compteur);