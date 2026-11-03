// Déclaration de la fonction
function fonctionLitterale(a, b) {

    // Création de l'objet littéral
    let resultat = {
        Somme: a + b,
        Soustraction: a - b,
        Multiplication: a * b,
        Division: a / b
    };

    return resultat;
}

// Appel de la fonction
let calcul = fonctionLitterale(10, 5);

// Affichage du résultat
console.log(calcul);