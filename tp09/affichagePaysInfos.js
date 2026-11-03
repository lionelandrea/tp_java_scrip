function chargerPays() {

    let req = new XMLHttpRequest();

    req.open("GET", "https://countriesnow.space/api/v0.1/countries/capital");

    req.onload = function() {

        if (req.readyState === 4 && req.status === 200) {

            let data = JSON.parse(req.responseText);

            let listePays = document.querySelector("#listePays");

            if (data.error) {
                listePays.textContent = "Erreur : " + data.msg;
                return;
            }

            for (let i = 0; i < data.data.length; i++) {

                let pays = data.data[i];

                listePays.innerHTML += `
                    <div>
                        <h3>${pays.name}</h3>
                        <p>Capitale : ${pays.capital || "Non disponible"}</p>
                        <p>Population : Non disponible</p>
                        <p>Région : Non disponible</p>
                        <hr>
                    </div>
                `;
            }

        } else if (req.readyState === 4) {

            document.querySelector("#listePays").textContent =
                "Erreur de récupération des données.";

        }
    };

    req.send();
}