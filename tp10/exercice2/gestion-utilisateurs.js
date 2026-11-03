
const URL = "https://digicode.cleverapps.io/utilisateurs/";

// Identifiant du créateur
const ID_CREATEUR = "TonPseudo";


let utilisateurs = [];

const tableau = document.getElementById("liste-utilisateurs");

const formulaire = document.getElementById("formulaire");

const dialogue = document.getElementById("formulaire-dialogue");

const message = document.getElementById("message");


async function chargerUtilisateurs() {

    try {

        const reponse = await fetch(URL + ID_CREATEUR);

        if (!reponse.ok) {
            throw new Error("Impossible de récupérer les utilisateurs.");
        }

        const donnees = await reponse.json();

        utilisateurs = Array.isArray(donnees)
            ? donnees
            : donnees.data || donnees.utilisateurs || [];

        afficherUtilisateurs();

    } catch (erreur) {

        message.textContent = erreur.message;

    }

}


function afficherUtilisateurs() {

    tableau.innerHTML = "";

    utilisateurs.forEach(utilisateur => {

        const ligne = document.createElement("tr");

        const adresse = `${utilisateur.numeroRue ?? ""} ${utilisateur.libelleRue ?? ""}, ${utilisateur.codePostal ?? ""} ${utilisateur.ville ?? ""}`;

        const valeurs = [
            utilisateur.id,
            utilisateur.nom,
            utilisateur.prenom,
            utilisateur.dateNaissance,
            utilisateur.lieuNaissance,
            adresse
        ];

        valeurs.forEach(valeur => {

            const cellule = document.createElement("td");

            cellule.textContent = valeur ?? "";

            ligne.appendChild(cellule);

        });

        const actions = document.createElement("td");

        const boutonModifier = document.createElement("button");

        boutonModifier.textContent = "Modifier";

        boutonModifier.className = "modifier";

        boutonModifier.addEventListener("click", function() {
            modifierUtilisateur(utilisateur.id);
        });

        const boutonSupprimer = document.createElement("button");

        boutonSupprimer.textContent = "🗑";

        boutonSupprimer.className = "supprimer";

        boutonSupprimer.addEventListener("click", function() {
            supprimerUtilisateur(utilisateur.id);
        });

        actions.append(boutonModifier, boutonSupprimer);

        ligne.appendChild(actions);

        tableau.appendChild(ligne);

    });

    if (utilisateurs.length === 0) {

        tableau.innerHTML = `
            <tr>
                <td colspan="7">Aucun utilisateur trouvé.</td>
            </tr>
        `;

    }

}


document.getElementById("ajouter").addEventListener("click", function() {

    formulaire.reset();

    document.getElementById("id").value = "";

    document.getElementById("titre").textContent = "Ajouter un utilisateur";

    dialogue.showModal();

});


function recupererDonnees() {

    return {

        id: document.getElementById("id").value || null,

        idCreateur: ID_CREATEUR,

        dateMaj: null,

        nom: document.getElementById("nom").value,

        prenom: document.getElementById("prenom").value,

        genre: document.getElementById("genre").value,

        dateNaissance: document.getElementById("dateNaissance").value,

        lieuNaissance: document.getElementById("lieuNaissance").value,

        departementNaissance: document.getElementById("departementNaissance").value,

        numeroRue: document.getElementById("numeroRue").value,

        libelleRue: document.getElementById("libelleRue").value,

        codePostal: document.getElementById("codePostal").value,

        ville: document.getElementById("ville").value

    };

}


async function ajouterUtilisateur(utilisateur) {

    try {

        const reponse = await fetch(URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(utilisateur)

        });

        const resultat = await reponse.json();

        if (!reponse.ok) {

            throw new Error(resultat.message || resultat.error || "Erreur lors de la création.");

        }

        message.textContent = "Utilisateur créé avec succès !";

        dialogue.close();

        formulaire.reset();

        chargerUtilisateurs();

    } catch (erreur) {

        message.textContent = "Erreur : " + erreur.message;

    }

}



async function modifierUtilisateur(id) {

    const utilisateur = utilisateurs.find(element => element.id == id);

    if (!utilisateur) return;

    document.getElementById("titre").textContent = "Modifier un utilisateur";

    Object.keys(utilisateur).forEach(cle => {

        const champ = document.getElementById(cle);

        if (champ) {
            champ.value = utilisateur[cle] ?? "";
        }

    });

    document.getElementById("id").value = utilisateur.id;

    dialogue.showModal();

}


async function supprimerUtilisateur(id) {

    const confirmation = confirm("Voulez-vous vraiment supprimer cet utilisateur ?");

    if (!confirmation) return;

    try {

        const reponse = await fetch(URL + ID_CREATEUR + "/" + id, {

            method: "DELETE"

        });

        if (!reponse.ok) {
            throw new Error("Erreur lors de la suppression.");
        }

        message.textContent = "Utilisateur supprimé avec succès !";

        chargerUtilisateurs();

    } catch (erreur) {

        message.textContent = erreur.message;

    }

}


formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const utilisateur = recupererDonnees();

    if (utilisateur.id === null) {

        ajouterUtilisateur(utilisateur);

    } else {

        modifierAvecPUT(utilisateur);

    }

});



async function modifierAvecPUT(utilisateur) {

    try {

        const reponse = await fetch(URL + utilisateur.id, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(utilisateur)

        });

        const resultat = await reponse.json();

        if (!reponse.ok) {
            throw new Error(resultat.message || resultat.error || "Erreur de modification.");
        }

        message.textContent = "Utilisateur modifié avec succès !";

        dialogue.close();

        chargerUtilisateurs();

    } catch (erreur) {

        message.textContent = "Erreur : " + erreur.message;

    }

}



document.getElementById("annuler").addEventListener("click", function() {

    dialogue.close();

});



chargerUtilisateurs();