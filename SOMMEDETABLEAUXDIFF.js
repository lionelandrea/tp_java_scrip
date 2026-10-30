let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];

let array3 = [];

let taille = Math.min(array1.length, array2.length);

for (let i = 0; i < taille; i++) {

    let valeur1= i < array1.length ? array1[i] : 0;

    let valeur2= i < array2.length ? array2[i] : 0;

    array3[i] = valeur1 + valeur2;
}

console.log("Résultat : " + array3);