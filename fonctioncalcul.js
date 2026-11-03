function fonctioncalcul(a, b) {
    return a * b + a + b;
}

let resultat = fonctioncalcul(5, 3);
console.log("Le résultat de la fonction est :", resultat);


let resultatTexte = fonctioncalcul("5", "3");

console.log("Résultat avec des chaines:", resultatTexte);