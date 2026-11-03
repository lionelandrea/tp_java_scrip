const URL = "https://digicode.cleverapps.io/json/pays/pollution";

let donneesPays = [];

async function chargerDonnees() {

    try {

        const reponse = await fetch(URL);

        const donnees = await reponse.json();

        donneesPays = donnees.pays;

        afficherPays(donneesPays);

    } catch (erreur) {

        alert("Erreur lors du chargement des données.");

        console.log(erreur);

    }
}

function afficherPays(liste) {

    const tableau = document.getElementById("corps-tableau");

    tableau.innerHTML = "";

    liste.forEach(pays => {

        const ligne = document.createElement("tr");

        ligne.innerHTML = `
            <td>${pays.nom}</td>
            <td>${pays.valeur}</td>
            <td>${pays.pourcentage}</td>
        `;

        tableau.appendChild(ligne);

    });

}

document.getElementById("formulaire").addEventListener("submit", function(event) {

    event.preventDefault();

    const valeurMin = document.getElementById("min").value;
    const valeurMax = document.getElementById("max").value;

    const min = valeurMin === "" ? 0 : Number(valeurMin);

    const max = valeurMax === "" ? Number.MAX_VALUE : Number(valeurMax);

    if (min < 0 || max < 0) {

        alert("Veuillez saisir des valeurs positives.");

        return;
    }

    if (min > max) {

        alert("Le MIN doit être inférieur au MAX.");

        return;
    }

    const resultats = donneesPays.filter(pays => {

        return Number(pays.valeur) >= min &&
               Number(pays.valeur) <= max;

    });

    afficherPays(resultats);

});

chargerDonnees();