function chargerDonnees() {

    let req = new XMLHttpRequest();

    req.open("GET", "https://digicode.cleverapps.io/json/pays/pollution");

    req.onload = function() {

        if (req.status === 200) {

            let data = JSON.parse(req.responseText);

            let titre = document.querySelector("#titre");
            let annee = document.querySelector("#annee");
            let corps = document.querySelector("#corps");

            titre.textContent = "Pollution : " + data.polluant;

            annee.textContent = "Année : " + data.annee;

            for (let i = 0; i < data.pays.length; i++) {

                let pays = data.pays[i];

                corps.innerHTML += `
                    <tr>
                        <td>${pays.nom}</td>
                        <td>${pays.valeur}</td>
                        <td>${pays.pourcentage}%</td>
                    </tr>
                `;
            }

        } else {

            document.querySelector("#erreur").textContent =
                "Erreur lors de la récupération des données.";

        }
    };

    req.onerror = function() {
        document.querySelector("#erreur").textContent =
            "Impossible de contacter le serveur.";
    };

    req.send();
}