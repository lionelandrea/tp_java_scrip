// Déclaration de la fonction
function fonctionMoyenne(array) {

    // Vérifier si le paramètre est un tableau
    if (!Array.isArray(array)) {
        return "Erreur : le paramètre doit être un tableau.";
    }

    // Vérifier si le tableau est vide
    if (array.length === 0) {
        return 0;
    }

    let somme = 0;

    // Parcourir le tableau
    for (let i = 0; i < array.length; i++) {

        // Vérifier si l'élément est un nombre
        if (typeof array[i] !== "number") {
            return "Erreur : un élément n'est pas un nombre.";
        }

        somme = somme + array[i];
    }

    // Calculer la moyenne
    return somme / array.length;
}

// Premier test : tableau contenant des nombres
console.log("Moyenne :", fonctionMoyenne([10, 20, 30, 40]));

// Deuxième test : tableau vide
console.log("Tableau vide :", fonctionMoyenne([]));

// Troisième test : chaîne de caractères
console.log("Chaîne :", fonctionMoyenne("Bonjour"));

// Quatrième test : tableau contenant une chaîne
console.log("Tableau incorrect :", fonctionMoyenne([10, "20", 30]));