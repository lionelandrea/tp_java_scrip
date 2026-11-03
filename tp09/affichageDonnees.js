function chargerDonnees() {

    let req = new XMLHttpRequest();

    req.open("GET", "https://countriesnow.space/api/v0.1/countries/capital");

    req.onload = function() {

        if (req.readyState === 4 && req.status === 200) {

            let resultat = document.querySelector("#resultat");

            resultat.textContent = req.responseText;

        } else if (req.readyState === 4) {

            resultat.textContent = "Erreur lors du chargement des données.";

        }
    };

    req.send();
}