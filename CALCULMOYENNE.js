let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let somme = 0;


for (let i = 0; i < array.length; i++) {
    somme = somme + array[i];
}

let moyenne = somme / array.length;

console.log("Somme : " + somme);
console.log("Moyenne : " + moyenne);