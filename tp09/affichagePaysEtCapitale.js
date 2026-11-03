let listePays = [];
let ordreTri = 0;

function chargerPays() {

    let req = new XMLHttpRequest();

    req.open("GET", "https://countriesnow.space/api/v0.1/countries/capital");

    req.onload = function() {

        if (req.readyState === 4 && req.status === 200) {

            let data = JSON.parse(req.responseText);

            if (data.error) {
                document.querySelector("#corps").textContent = data.msg;
                return;
            }

            listePays = data.data;

            afficherPays();

        } else if (req.readyState === 4) {

            document.querySelector("#corps").textContent =
                "Erreur de récupération des données.";

        }
    };

    req.send();
}

function afficherPays() {

    let corps = document.querySelector("#corps");

    corps.innerHTML = "";

    for (let i = 0; i < listePays.length; i++) {

        let pays = listePays[i];

        corps.innerHTML += `
            <tr>
                <td>${pays.name}</td>
                <td>${pays.capital || "Non disponible"}</td>
                <td>Non disponible</td>
                <td>Non disponible</td>
            </tr>
        `;
    }
}

document.querySelector("#triPopulation").addEventListener("click", function() {

    if (ordreTri === 0) {
        ordreTri = 1;
    } else {
        ordreTri = 0;
    }

    afficherPays();

    document.querySelector("#triPopulation").textContent =
        ordreTri === 1 ? "↑" : "↓";

});