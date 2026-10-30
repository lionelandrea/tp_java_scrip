let array = [2, 4, 6];

let resultat = array.length >= 1 &&
    (array[0] === 6 || array[array.length - 1] === 6);

console.log(resultat);